import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { moreOptions } from '../data/more';
import { colors } from '../theme/colors';

const MoreScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name='chevron-back' size={22} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>More</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.optionList}>
        {moreOptions.map((option, index) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionRow,
              index !== moreOptions.length - 1 && styles.optionSpacing,
            ]}
          >
            <View
              style={[
                styles.iconBadge,
                { backgroundColor: option.tint || colors.primaryMuted },
              ]}
            >
              <Ionicons
                name={option.icon}
                size={20}
                color={option.danger ? colors.danger : colors.primary}
              />
            </View>
            <Text
              style={[
                styles.optionTitle,
                option.danger && styles.optionDanger,
              ]}
            >
              {option.title}
            </Text>
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
    marginBottom: 24,
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
  headerSpacer: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  optionList: {
    marginTop: 8,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  optionSpacing: {
    marginBottom: 14,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  optionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  optionDanger: {
    color: colors.danger,
  },
});

export default MoreScreen;
