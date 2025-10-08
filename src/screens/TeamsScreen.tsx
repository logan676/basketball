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
  type TeamProfile,
  teamTabs,
  teams,
  type TeamTab,
} from '../data/teams';
import { colors } from '../theme/colors';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type TeamsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'Teams'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const TeamsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TeamTab>(teamTabs[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation<TeamsScreenNavigationProp>();

  const normalizedSearchTerm = useMemo(
    () => searchTerm.trim().toLowerCase(),
    [searchTerm],
  );

  const filteredTeams = useMemo(() => {
    let base: TeamProfile[] = [];
    switch (activeTab) {
      case 'Favorites':
        base = teams.slice(0, 2);
        break;
      case 'Following':
        base = teams.slice(0, 3);
        break;
      default:
        base = teams;
        break;
    }

    if (normalizedSearchTerm.length === 0) {
      return base;
    }

    return base.filter((team) => {
      const haystack = `${team.name} ${team.city} ${team.conference}`.toLowerCase();
      return haystack.includes(normalizedSearchTerm);
    });
  }, [activeTab, normalizedSearchTerm]);

  const handleOpenTeam = useCallback(
    (team: TeamProfile) => {
      navigation.navigate('TeamDetail', { teamId: team.id });
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
        <Text style={styles.title}>Teams</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="search-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search teams"
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
        {teamTabs.map((tab) => {
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
        {filteredTeams.map((team, index) => (
          <TouchableOpacity
            key={team.id}
            style={[
              styles.teamRow,
              index !== filteredTeams.length - 1 && styles.teamSpacing,
            ]}
            activeOpacity={0.85}
            onPress={() => handleOpenTeam(team)}
          >
            <Image source={{ uri: team.logo }} style={styles.teamLogo} />
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamCity}>{team.city}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={colors.textMuted}
            />
          </TouchableOpacity>
        ))}
      </View>
      {filteredTeams.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons
            name="business-outline"
            size={40}
            color={colors.textMuted}
            style={styles.emptyIcon}
          />
          <Text style={styles.emptyTitle}>No teams match</Text>
          <Text style={styles.emptySubtitle}>
            Adjust the search term or tab.
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
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  teamSpacing: {
    marginBottom: 14,
  },
  teamLogo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 14,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
  },
  teamCity: {
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

export default TeamsScreen;
