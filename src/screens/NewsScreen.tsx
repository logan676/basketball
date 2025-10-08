import React, { useCallback, useMemo, useState } from 'react';
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
  CompositeNavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  latestNews,
  newsCategories,
  topStory,
  type NewsArticle,
  type NewsCategory,
} from '../data/news';
import { colors } from '../theme/colors';
import type { RootStackParamList, TabParamList } from '../navigation/types';

type NewsScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'News'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const NewsScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<NewsCategory>(newsCategories[0]);
  const navigation = useNavigation<NewsScreenNavigationProp>();
  const theme = useTheme();

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'Top News') {
      return latestNews;
    }

    return latestNews.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  const handleOpenArticle = useCallback(
    (article: NewsArticle) => {
      navigation.navigate('NewsDetail', { articleId: article.id });
    },
    [navigation],
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>News</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="search-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} />
        <Text style={styles.searchPlaceholder}>Search news...</Text>
      </View>

      <View style={styles.categories}>
        {newsCategories.map((category, index) => {
          const active = category === activeCategory;
          return (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                active && styles.categoryChipActive,
                index !== newsCategories.length - 1 && styles.categorySpacing,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[styles.categoryText, active && styles.categoryTextActive]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.topCard}
        activeOpacity={0.85}
        onPress={() => handleOpenArticle(topStory)}
      >
        <Image source={{ uri: topStory.image }} style={styles.topImage} />
        <View style={styles.topContent}>
          <Text style={styles.topTitle}>{topStory.title}</Text>
          {topStory.subtitle ? (
            <Text style={styles.topSubtitle}>{topStory.subtitle}</Text>
          ) : null}
          <Text style={[styles.timeText, styles.topTime]}>
            {topStory.timeAgo}
          </Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Latest news</Text>
      <View>
        {filteredArticles.map((article, index) => (
          <TouchableOpacity
            key={article.id}
            style={[
              styles.latestItem,
              index !== filteredArticles.length - 1 && styles.latestItemSpacing,
            ]}
            activeOpacity={0.85}
            onPress={() => handleOpenArticle(article)}
          >
            <Image source={{ uri: article.image }} style={styles.latestImage} />
            <View style={styles.latestContent}>
              <Text style={styles.latestTitle}>{article.title}</Text>
              <Text style={[styles.timeText, styles.latestTime]}>
                {article.timeAgo}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
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
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 18,
    backgroundColor: colors.surface,
  },
  categorySpacing: {
    marginRight: 12,
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textMuted,
  },
  categoryTextActive: {
    color: colors.surface,
  },
  topCard: {
    backgroundColor: colors.surface,
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 24,
  },
  topImage: {
    width: '100%',
    height: 180,
  },
  topContent: {
    padding: 18,
  },
  topTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  topSubtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginTop: 4,
  },
  timeText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  topTime: {
    marginTop: 6,
    color: colors.textMuted,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  latestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 12,
  },
  latestItemSpacing: {
    marginBottom: 14,
  },
  latestImage: {
    width: 72,
    height: 72,
    borderRadius: 14,
    marginRight: 14,
  },
  latestContent: {
    flex: 1,
  },
  latestTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  latestTime: {
    marginTop: 6,
  },
});

export default NewsScreen;
