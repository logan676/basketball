import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  useNavigation,
  useRoute,
  type RouteProp,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { findTeamById } from '../data/teams';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type TeamDetailRouteProp = RouteProp<RootStackParamList, 'TeamDetail'>;
type TeamDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TeamDetail'
>;

const TeamDetailScreen: React.FC = () => {
  const navigation = useNavigation<TeamDetailNavigationProp>();
  const { params } = useRoute<TeamDetailRouteProp>();

  const team = findTeamById(params.teamId);

  if (!team) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingTitle}>Team not found</Text>
        <TouchableOpacity
          style={styles.missingButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.missingButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{team.name}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.heroCard}>
        <Image source={{ uri: team.logo }} style={styles.heroLogo} />
        <Text style={styles.heroCity}>
          {team.city} • {team.conference} Conference
        </Text>
        <Text style={styles.heroRecord}>{team.record}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Coaching staff</Text>
        <Text style={styles.sectionBody}>Head coach: {team.coach}</Text>
        <Text style={styles.sectionBody}>Arena: {team.arena}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team identity</Text>
        <Text style={styles.sectionBody}>{team.overview}</Text>
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
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    shadowColor: '#00000012',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  headerSpacer: {
    width: 44,
  },
  heroCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: '#0000000A',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 2,
  },
  heroLogo: {
    width: 120,
    height: 120,
    borderRadius: 24,
    marginBottom: 16,
  },
  heroCity: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: 8,
  },
  heroRecord: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    borderRadius: 20,
    backgroundColor: colors.surface,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  sectionBody: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    marginBottom: 8,
  },
  missingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 24,
  },
  missingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  missingButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 18,
    backgroundColor: colors.primary,
  },
  missingButtonText: {
    color: colors.surface,
    fontWeight: '600',
  },
});

export default TeamDetailScreen;
