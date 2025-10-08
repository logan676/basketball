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

import { findPlayerById } from '../data/players';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type PlayerDetailRouteProp = RouteProp<RootStackParamList, 'PlayerDetail'>;
type PlayerDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PlayerDetail'
>;

const PlayerDetailScreen: React.FC = () => {
  const navigation = useNavigation<PlayerDetailNavigationProp>();
  const { params } = useRoute<PlayerDetailRouteProp>();

  const player = findPlayerById(params.playerId);

  if (!player) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingTitle}>Player not found</Text>
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
        <Text style={styles.headerTitle}>Player profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.profileCard}>
        <Image source={{ uri: player.image }} style={styles.avatar} />
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.team}>{player.team}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{player.position}</Text>
          <View style={styles.metaDivider} />
          <Text style={styles.meta}>{player.height}</Text>
          <View style={styles.metaDivider} />
          <Text style={styles.meta}>{player.weight}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Season averages</Text>
        <View style={styles.statsRow}>
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>{player.stats.points}</Text>
            <Text style={styles.statLabel}>PPG</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>{player.stats.rebounds}</Text>
            <Text style={styles.statLabel}>RPG</Text>
          </View>
          <View style={styles.statBlock}>
            <Text style={styles.statValue}>{player.stats.assists}</Text>
            <Text style={styles.statLabel}>APG</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Scouting report</Text>
        <Text style={styles.sectionBody}>{player.bio}</Text>
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
  profileCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 28,
    shadowColor: '#0000000A',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  team: {
    fontSize: 16,
    color: colors.textMuted,
    marginTop: 6,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  metaDivider: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 10,
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBlock: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  statLabel: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 1,
  },
  sectionBody: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
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

export default PlayerDetailScreen;
