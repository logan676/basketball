import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { moreOptions, type MoreOption } from '../data/more';
import { colors } from '../theme/colors';

const MoreScreen: React.FC = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="menu-outline" size={22} color={colors.text} />
        </View>
        <Text style={styles.title}>More</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.optionList}>
        {moreOptions.map((option: MoreOption, index) => {
          const iconName = option.icon as keyof typeof Ionicons.glyphMap;

          return (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionRow,
                index !== moreOptions.length - 1 && styles.optionSpacing,
              ]}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.iconBadge,
                  { backgroundColor: option.tint || colors.primaryMuted },
                ]}
              >
                <Ionicons
                  name={iconName}
                  size={20}
                  color={option.danger ? colors.danger : colors.primary}
                />
              </View>
              <View style={styles.optionContent}>
                <Text
                  style={[
                    styles.optionTitle,
                    option.danger && styles.optionDanger,
                  ]}
                >
                  {option.title}
                </Text>
                {option.description ? (
                  <Text style={styles.optionDescription}>
                    {option.description}
                  </Text>
                ) : null}
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
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  optionDescription: {
    marginTop: 4,
    fontSize: 13,
    color: colors.textMuted,
  },
  optionDanger: {
    color: colors.danger,
  },
});

export default MoreScreen;
