import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { teamTabs, teams } from '../data/teams';
import { colors } from '../theme/colors';

const TeamsScreen = () => {
  const [activeTab, setActiveTab] = useState(teamTabs[0]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Teams</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name='search-outline' size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name='search-outline' size={18} color={colors.textMuted} />
        <Text style={styles.searchPlaceholder}>Search for teams</Text>
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
        {teams.map((team, index) => (
          <TouchableOpacity
            key={team.id}
            style={[
              styles.teamRow,
              index !== teams.length - 1 && styles.teamSpacing,
            ]}
          >
            <Image source={{ uri: team.logo }} style={styles.teamLogo} />
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamCity}>{team.city}</Text>
            </View>
            <Ionicons
              name='chevron-forward'
              size={18}
              color={colors.textMuted}
            />
          </TouchableOpacity>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
  },
  searchPlaceholder: {
    marginLeft: 10,
    color: colors.textMuted,
    fontSize: 16,
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
});

export default TeamsScreen;
