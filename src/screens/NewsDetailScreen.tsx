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

import { findArticleById } from '../data/news';
import { colors } from '../theme/colors';
import type { RootStackParamList } from '../navigation/types';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;
type NewsDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'NewsDetail'
>;

const NewsDetailScreen: React.FC = () => {
  const navigation = useNavigation<NewsDetailNavigationProp>();
  const { params } = useRoute<NewsDetailRouteProp>();

  const article = findArticleById(params.articleId);

  if (!article) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingTitle}>Article not found</Text>
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.heroContainer}>
        <Image source={{ uri: article.image }} style={styles.heroImage} />
        <TouchableOpacity
          style={styles.heroBackButton}
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{article.timeAgo}</Text>
          <View style={styles.metaDot} />
          <Text style={styles.metaText}>{article.author}</Text>
        </View>
        <Text style={styles.title}>{article.title}</Text>
        {article.subtitle ? (
          <Text style={styles.subtitle}>{article.subtitle}</Text>
        ) : null}
        <Text style={styles.body}>{article.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  heroContainer: {
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: 260,
  },
  heroBackButton: {
    position: 'absolute',
    top: 48,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFFE6',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  metaText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textMuted,
  },
  metaDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.textMuted,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: 18,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
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

export default NewsDetailScreen;
