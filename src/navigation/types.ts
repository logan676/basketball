import type { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
  News: undefined;
  Scores: undefined;
  Teams: undefined;
  Players: undefined;
  More: undefined;
};

export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  NewsDetail: { articleId: string };
  PlayerDetail: { playerId: string };
  TeamDetail: { teamId: string };
  GameDetail: { gameId: string };
};
