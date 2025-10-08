import React, { useCallback, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
  type PlayerProfile,
  playerTabs,
  players,
  type PlayerTab,
} from '../data/players';
import { colors } from '../theme/colors';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type PlayersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Players'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const PlayersScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PlayerTab>(playerTabs[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation<PlayersScreenNavigationProp>();

  const normalizedSearchTerm = useMemo(
    () => searchTerm.trim().toLowerCase(),
    [searchTerm],
  );

  const filteredPlayers = useMemo(() => {
    let base: PlayerProfile[] = [];
    switch (activeTab) {
      case 'Favorites':
        base = players.filter((player) => player.favorite);
        break;
      case 'My Players':
        // Placeholder logic: reuse favorites to represent saved players
        base = players.filter((player) => player.favorite);
        break;
      default:
        base = players;
        break;
    }

    if (normalizedSearchTerm.length === 0) {
      return base;
    }

    return base.filter((player) => {
      const haystack = `${player.name} ${player.team} ${player.position}`.toLowerCase();
      return haystack.includes(normalizedSearchTerm);
    });
  }, [activeTab, normalizedSearchTerm]);

  const handleOpenPlayer = useCallback(
    (player: PlayerProfile) => {
      navigation.navigate('PlayerDetail', { playerId: player.id });
    },
    [navigation],
  );

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Players</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="search-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search players"
          placeholderTextColor={colors.textMuted}
          value={searchTerm}
          onChangeText={handleSearchChange}
          selectionColor={colors.primary}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />
        {searchTerm.length > 0 ? (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearSearch}
            accessibilityRole="button"
            accessibilityLabel="Clear search"
          >
            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.tabRow}>
        {playerTabs.map((tab) => {
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

      <View>
        {filteredPlayers.map((player, index) => (
          <TouchableOpacity
            key={player.id}
            style={[
              styles.playerRow,
              index !== filteredPlayers.length - 1 && styles.playerSpacing,
            ]}
            activeOpacity={0.85}
            onPress={() => handleOpenPlayer(player)}
          >
            <Image source={{ uri: player.image }} style={styles.playerImage} />
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{player.name}</Text>
              <Text style={styles.playerTeam}>{player.team}</Text>
            </View>
            <Ionicons
              name={player.favorite ? 'star' : 'star-outline'}
              size={20}
              color={player.favorite ? colors.primary : colors.textMuted}
            />
          </TouchableOpacity>
        ))}
      </View>
      {filteredPlayers.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons
            name="person-circle-outline"
            size={40}
            color={colors.textMuted}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>No players match</Text>
          <Text style={styles.emptySubtitle}>
            Try another name, team, or tab.
          </Text>
        </View>
      ) : null}
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: colors.text,
    fontSize: 16,
    paddingVertical: 10,
  },
  clearButton: {
    marginLeft: 8,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tabButton: {
    marginRight: 24,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
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
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  playerSpacing: {
    marginBottom: 14,
  },
  playerImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
  },
  playerTeam: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textMuted,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyIcon: {
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.textMuted,
  },
});

export default PlayersScreen;
