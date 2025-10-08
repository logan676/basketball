import React from 'react';
import {
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

import { findLiveGameById } from '../data/scores';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type GameDetailRouteProp = RouteProp<RootStackParamList, 'GameDetail'>;
type GameDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'GameDetail'
>;

const GameDetailScreen: React.FC = () => {
  const navigation = useNavigation<GameDetailNavigationProp>();
  const { params } = useRoute<GameDetailRouteProp>();

  const game = findLiveGameById(params.gameId);

  if (!game) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingTitle}>Game not found</Text>
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
        <Text style={styles.headerTitle}>Game center</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.status}>{game.status}</Text>
        <Text style={styles.timer}>{game.startTime}</Text>
        <View style={styles.matchupRow}>
          <View style={styles.teamColumn}>
            <Text style={styles.teamName}>{game.home}</Text>
            <Text style={styles.teamLabel}>Home</Text>
          </View>
          <Text style={styles.scoreValue}>{game.homeScore}</Text>
          <Text style={styles.scoreSeparator}>-</Text>
          <Text style={styles.scoreValue}>{game.awayScore}</Text>
          <View style={styles.teamColumn}>
            <Text style={styles.teamName}>{game.away}</Text>
            <Text style={styles.teamLabel}>Away</Text>
          </View>
        </View>
        <Text style={styles.venue}>
          {game.arena} • {game.broadcaster}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storyline</Text>
        <Text style={styles.sectionBody}>{game.storyline}</Text>
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
  scoreCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderRadius: 26,
    backgroundColor: colors.surface,
    shadowColor: '#0000000A',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.danger,
    marginBottom: 6,
  },
  timer: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 24,
  },
  matchupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamColumn: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  teamLabel: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.text,
    marginHorizontal: 8,
  },
  scoreSeparator: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.textMuted,
  },
  venue: {
    fontSize: 13,
    color: colors.textMuted,
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

export default GameDetailScreen;
