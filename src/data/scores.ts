export type ScoreTab = 'Live' | 'Past' | 'Upcoming';
export type LeagueFilter = 'All Leagues' | 'NBA' | 'WNBA' | 'NCAAM';

export interface LiveGame {
  id: string;
  home: string;
  away: string;
  status: 'Live' | 'Final' | 'Upcoming';
  homeScore: number;
  awayScore: number;
  startTime: string;
  arena: string;
  broadcaster: string;
  storyline: string;
}

export const scoreTabs: ScoreTab[] = ['Live', 'Past', 'Upcoming'];

export const leagues: LeagueFilter[] = ['All Leagues', 'NBA', 'WNBA', 'NCAAM'];

export const liveGames: LiveGame[] = [
  {
    id: 'lakers-celtics',
    home: 'Los Angeles Lakers',
    away: 'Boston Celtics',
    status: 'Live',
    homeScore: 102,
    awayScore: 98,
    startTime: 'Q4 04:12',
    arena: 'Crypto.com Arena',
    broadcaster: 'ESPN',
    storyline:
      'Anthony Davis and Jayson Tatum are trading baskets in a back-and-forth fourth quarter. The Lakers have scored on six straight possessions.',
  },
  {
    id: 'warriors-nets',
    home: 'Golden State Warriors',
    away: 'Brooklyn Nets',
    status: 'Live',
    homeScore: 88,
    awayScore: 95,
    startTime: 'Q3 01:20',
    arena: 'Chase Center',
    broadcaster: 'TNT',
    storyline:
      'Stephen Curry has 31 points but the Nets defense has forced 14 turnovers to stay ahead heading into the final frame.',
  },
  {
    id: 'heat-bucks',
    home: 'Miami Heat',
    away: 'Milwaukee Bucks',
    status: 'Live',
    homeScore: 110,
    awayScore: 105,
    startTime: 'Q4 07:45',
    arena: 'Kaseya Center',
    broadcaster: 'NBA TV',
    storyline:
      'Jimmy Butler is pacing Miami with 27 points while Giannis Antetokounmpo has already tallied a 30-point double-double.',
  },
  {
    id: 'sixers-nuggets',
    home: 'Philadelphia 76ers',
    away: 'Denver Nuggets',
    status: 'Live',
    homeScore: 92,
    awayScore: 89,
    startTime: 'Q3 09:33',
    arena: 'Wells Fargo Center',
    broadcaster: 'CBS Sports',
    storyline:
      'Joel Embiid and Nikola Jokić are dueling in the paint while Tyrese Maxey has chipped in with 18 points for Philadelphia.',
  },
];

export const findLiveGameById = (gameId: string): LiveGame | undefined =>
  liveGames.find((game) => game.id === gameId);
