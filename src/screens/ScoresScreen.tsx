import React, { useCallback, useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  leagues,
  liveGames,
  pastGames,
  upcomingGames,
  scoreTabs,
  type Game,
  type LeagueFilter,
  type ScoreTab,
} from '../data/scores';
import { colors } from '../theme/colors';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type ScoresScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Scores'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const ScoresScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScoreTab>(scoreTabs[0]);
  const [activeLeague, setActiveLeague] = useState<LeagueFilter>(leagues[0]);
  const navigation = useNavigation<ScoresScreenNavigationProp>();

  const filteredGames = useMemo(() => {
    const dataset =
      activeTab === 'Live'
        ? liveGames
        : activeTab === 'Past'
          ? pastGames
          : upcomingGames;

    if (activeLeague === 'All Leagues') {
      return dataset;
    }

    return dataset.filter((game) => game.league === activeLeague);
  }, [activeLeague, activeTab]);

  const handleOpenGame = useCallback(
    (game: Game) => {
      navigation.navigate('GameDetail', { gameId: game.id });
    },
    [navigation],
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Scores</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="settings-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabRow}>
        {scoreTabs.map((tab) => {
          const active = tab === activeTab;
          return (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, active && styles.tabButtonActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.leagueRow}>
        {leagues.map((league, index) => {
          const active = league === activeLeague;
          return (
            <TouchableOpacity
              key={league}
              style={[
                styles.leagueChip,
                active && styles.leagueChipActive,
                index !== leagues.length - 1 && styles.leagueSpacing,
              ]}
              onPress={() => setActiveLeague(league)}
            >
              <Text
                style={[
                  styles.leagueText,
                  active && styles.leagueTextActive,
                ]}
              >
                {league}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View>
        {filteredGames.map((game, index) => {
          const isLive = game.status === 'Live';
          const isFinal = game.status === 'Final';
          const showScores = game.status !== 'Upcoming';
          const statusDotStyle = [
            styles.statusDot,
            isLive && styles.statusDotLive,
            isFinal && styles.statusDotFinal,
            !isLive && !isFinal && styles.statusDotUpcoming,
          ];
          const statusTextStyle = [
            styles.statusText,
            isLive && styles.statusTextLive,
            isFinal && styles.statusTextFinal,
            !isLive && !isFinal && styles.statusTextUpcoming,
          ];

          return (
          <TouchableOpacity
            key={game.id}
            style={[
              styles.gameRow,
              index !== filteredGames.length - 1 && styles.gameSpacing,
            ]}
            activeOpacity={0.85}
            onPress={() => handleOpenGame(game)}
          >
            <View style={styles.gameInfo}>
              <Text style={styles.gameTeams}>
                {game.home} vs. {game.away}
              </Text>
              <View style={styles.statusRow}>
                <View style={statusDotStyle} />
                <Text style={statusTextStyle}>{game.status}</Text>
                <Text style={styles.startTime}>{game.startTime}</Text>
              </View>
              <Text style={styles.broadcastText}>
                {game.arena} • {game.broadcaster}
              </Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text
                style={[
                  styles.scoreText,
                  !showScores && styles.scoreTextUpcoming,
                ]}
              >
                {showScores ? game.homeScore : '--'}
              </Text>
              <Text
                style={[
                  styles.scoreDivider,
                  !showScores && styles.scoreTextUpcoming,
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  styles.scoreText,
                  !showScores && styles.scoreTextUpcoming,
                ]}
              >
                {showScores ? game.awayScore : '--'}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textMuted}
            />
          </TouchableOpacity>
        );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    shadowColor: '#0000000F',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginRight: 18,
  },
  tabButtonActive: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textMuted,
  },
  tabTextActive: {
    color: colors.text,
  },
  leagueRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  leagueChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: colors.surface,
  },
  leagueChipActive: {
    backgroundColor: colors.primary,
  },
  leagueSpacing: {
    marginRight: 12,
  },
  leagueText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textMuted,
  },
  leagueTextActive: {
    color: colors.surface,
  },
  gameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: colors.surface,
    borderRadius: 18,
  },
  gameSpacing: {
    marginBottom: 14,
  },
  gameInfo: {
    flex: 1,
    marginRight: 16,
  },
  gameTeams: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    marginRight: 6,
  },
  statusDotLive: {
    backgroundColor: colors.danger,
  },
  statusDotFinal: {
    backgroundColor: colors.textMuted,
  },
  statusDotUpcoming: {
    backgroundColor: colors.accent,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    marginRight: 8,
  },
  statusTextLive: {
    color: colors.danger,
  },
  statusTextFinal: {
    color: colors.textMuted,
  },
  statusTextUpcoming: {
    color: colors.accent,
  },
  startTime: {
    fontSize: 13,
    color: colors.textMuted,
  },
  broadcastText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  scoreTextUpcoming: {
    color: colors.textMuted,
  },
  scoreDivider: {
    marginHorizontal: 6,
    fontSize: 18,
    fontWeight: '700',
    color: colors.textMuted,
  },
});

export default ScoresScreen;
