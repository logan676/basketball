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
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation<NewsScreenNavigationProp>();
  const theme = useTheme();

  const normalizedSearchTerm = useMemo(
    () => searchTerm.trim().toLowerCase(),
    [searchTerm],
  );

  const filteredArticles = useMemo(() => {
    const pool: NewsArticle[] = [topStory, ...latestNews];

    return pool.filter((article) => {
      const matchesCategory =
        activeCategory === 'Top News'
          ? true
          : article.category === activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (normalizedSearchTerm.length === 0) {
        return true;
      }

      const haystack = `${article.title} ${article.subtitle ?? ''} ${article.author}`.toLowerCase();
      return haystack.includes(normalizedSearchTerm);
    });
  }, [activeCategory, normalizedSearchTerm]);

  const showTopStory =
    activeCategory === 'Top News' &&
    normalizedSearchTerm.length === 0 &&
    filteredArticles.some((article) => article.id === topStory.id);

  const listArticles = useMemo(
    () =>
      filteredArticles.filter(
        (article) => !(showTopStory && article.id === topStory.id),
      ),
    [filteredArticles, showTopStory],
  );

  const handleOpenArticle = useCallback(
    (article: NewsArticle) => {
      navigation.navigate('NewsDetail', { articleId: article.id });
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
        <TextInput
          style={styles.searchInput}
          placeholder="Search news"
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

      {showTopStory ? (
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
      ) : null}

      <Text style={styles.sectionTitle}>
        {normalizedSearchTerm.length > 0 ? 'Search results' : 'Latest news'}
      </Text>
      <View>
        {listArticles.map((article, index) => (
          <TouchableOpacity
            key={article.id}
            style={[
              styles.latestItem,
              index !== listArticles.length - 1 && styles.latestItemSpacing,
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
        {listArticles.length === 0 && !showTopStory ? (
          <View style={styles.emptyState}>
            <Ionicons
              name="search-outline"
              size={36}
              color={colors.textMuted}
              style={styles.emptyIcon}
            />
            <Text style={styles.emptyTitle}>No articles found</Text>
            <Text style={styles.emptySubtitle}>
              Try a different keyword or category.
            </Text>
          </View>
        ) : null}
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

export default NewsScreen;
