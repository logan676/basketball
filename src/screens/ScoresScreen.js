import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { leagues, liveGames, scoreTabs } from '../data/scores';

const ScoresScreen = () => {
  const [activeTab, setActiveTab] = useState(scoreTabs[0]);
  const [activeLeague, setActiveLeague] = useState(leagues[0]);

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
        {liveGames.map((game, index) => (
          <View
            key={game.id}
            style={[
              styles.gameRow,
              index !== liveGames.length - 1 && styles.gameSpacing,
            ]}
          >
            <View>
              <Text style={styles.gameTeams}>
                {game.home} vs. {game.away}
              </Text>
              <View style={styles.statusRow}>
                <View style={styles.liveDot} />
                <Text style={styles.statusText}>{game.status}</Text>
              </View>
            </View>
            <Text style={styles.scoreText}>
              {game.homeScore} - {game.awayScore}
            </Text>
          </View>
        ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 18,
    backgroundColor: colors.surface,
    borderRadius: 18,
  },
  gameSpacing: {
    marginBottom: 14,
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
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger,
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.danger,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
});

export default ScoresScreen;
