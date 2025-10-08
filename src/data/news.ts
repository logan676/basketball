export type NewsCategory = 'Top News' | 'Scores' | 'Trending';

export interface NewsArticle {
  id: string;
  title: string;
  subtitle?: string;
  timeAgo: string;
  image: string;
  category: NewsCategory;
  author: string;
  content: string;
}

export const newsCategories: NewsCategory[] = ['Top News', 'Scores', 'Trending'];

export const topStory: NewsArticle = {
  id: 'top-story',
  title: 'Lakers secure victory in overtime thriller',
  subtitle: 'Anthony Davis leads the charge with a dominant performance',
  timeAgo: '2 hours ago',
  image:
    'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80',
  category: 'Top News',
  author: 'Court Vision Staff',
  content:
    'The Los Angeles Lakers edged out the Boston Celtics 118-115 in a high-tempo overtime battle at Crypto.com Arena. Anthony Davis poured in 38 points and collected 17 rebounds, while LeBron James added 24 points and the decisive assist in the extra period. The win keeps the Lakers near the top of the Western Conference standings as the regular season hits the home stretch.',
};

export const latestNews: NewsArticle[] = [
  {
    id: 'warriors-record',
    title: "Warriors' Curry breaks three-point record",
    subtitle: 'Star guard continues to redefine shooting range',
    timeAgo: '2 hours ago',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=300&q=80',
    category: 'Trending',
    author: 'Maya Chen',
    content:
      'Stephen Curry nailed eight triples against the Nets to surpass his own single-season mark for made threes. The new record underscores Golden State’s perimeter-heavy system and Curry’s unmatched ability to score from deep.',
  },
  {
    id: 'rookie-debut',
    title: 'Rookie sensation shines in debut game',
    subtitle: 'Top pick shows poise beyond his years',
    timeAgo: '3 hours ago',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=300&q=80',
    category: 'Top News',
    author: 'David Ortiz',
    content:
      'In his first professional outing, the highly touted rookie posted 22 points, eight rebounds, and five assists. Coaches praised his composure and two-way impact as the franchise looks to rebuild around its young core.',
  },
  {
    id: 'trade-rumors',
    title: 'Trade rumors swirl around star player',
    subtitle: 'Multiple contenders monitoring the situation closely',
    timeAgo: '4 hours ago',
    image:
      'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=300&q=80',
    category: 'Trending',
    author: 'Kara Simmons',
    content:
      'League executives believe a blockbuster move could materialize before the deadline as several title hopefuls explore packages for the All-Star wing. Sources say the player is focused on competing while front offices negotiate behind the scenes.',
  },
  {
    id: 'injury-update',
    title: 'Injury update: Key player sidelined',
    subtitle: 'MRI confirms mild sprain with a week-to-week timeline',
    timeAgo: '5 hours ago',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=300&q=80',
    category: 'Scores',
    author: 'Alex Rivera',
    content:
      'The team confirmed that its starting point guard suffered a mild ankle sprain during practice. Medical staff expect a re-evaluation in seven days, with the hope of a return before the road trip later this month.',
  },
];

export const findArticleById = (articleId: string): NewsArticle | undefined => {
  if (articleId === topStory.id) {
    return topStory;
  }

  return latestNews.find((article) => article.id === articleId);
};
