import { teams } from './teams';

export type ScoreTab = 'Live' | 'Past' | 'Upcoming';
export type LeagueFilter = 'All Leagues' | 'NBA' | 'WNBA' | 'NCAAM';
export type League = 'NBA' | 'WNBA' | 'NCAAM';
export type GameStatus = 'Live' | 'Final' | 'Upcoming';

export interface Game {
  id: string;
  league: League;
  home: string;
  away: string;
  homeLogo: string;
  awayLogo: string;
  status: GameStatus;
  homeScore: number;
  awayScore: number;
  startTime: string;
  arena: string;
  broadcaster: string;
  storyline: string;
}

const nbaLogos: Record<string, string> = teams.reduce(
  (acc, team) => {
    acc[team.name] = team.logo;
    return acc;
  },
  {} as Record<string, string>
);

const extraLogos: Record<string, string> = {
  'Minnesota Lynx': 'https://a.espncdn.com/i/teamlogos/wnba/500/min.png',
  'Las Vegas Aces': 'https://a.espncdn.com/i/teamlogos/wnba/500/lva.png',
  'Seattle Storm': 'https://a.espncdn.com/i/teamlogos/wnba/500/sea.png',
  'New York Liberty': 'https://a.espncdn.com/i/teamlogos/wnba/500/nyl.png',
  'Chicago Sky': 'https://a.espncdn.com/i/teamlogos/wnba/500/chi.png',
  'Los Angeles Sparks': 'https://a.espncdn.com/i/teamlogos/wnba/500/las.png',
  'Phoenix Mercury': 'https://a.espncdn.com/i/teamlogos/wnba/500/phx.png',
  'UConn Huskies': 'https://a.espncdn.com/i/teamlogos/ncaa/500/41.png',
  'Duke Blue Devils': 'https://a.espncdn.com/i/teamlogos/ncaa/500/150.png',
  'Kansas Jayhawks': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2305.png',
  'North Carolina Tar Heels': 'https://a.espncdn.com/i/teamlogos/ncaa/500/153.png',
  'Baylor Bears': 'https://a.espncdn.com/i/teamlogos/ncaa/500/239.png',
  'Houston Cougars': 'https://a.espncdn.com/i/teamlogos/ncaa/500/248.png',
  'Gonzaga Bulldogs': 'https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png',
  "Saint Mary's Gaels": 'https://a.espncdn.com/i/teamlogos/ncaa/500/2608.png',
  'Virginia Cavaliers': 'https://a.espncdn.com/i/teamlogos/ncaa/500/258.png',
  'UCLA Bruins': 'https://a.espncdn.com/i/teamlogos/ncaa/500/26.png',
  'Arizona Wildcats': 'https://a.espncdn.com/i/teamlogos/ncaa/500/12.png',
};

const getLogo = (teamName: string): string =>
  nbaLogos[teamName] ?? extraLogos[teamName] ?? '';

export const scoreTabs: ScoreTab[] = ['Live', 'Past', 'Upcoming'];

export const leagues: LeagueFilter[] = ['All Leagues', 'NBA', 'WNBA', 'NCAAM'];

export const liveGames: Game[] = [
  {
    id: 'lakers-celtics',
    league: 'NBA',
    home: 'Los Angeles Lakers',
    away: 'Boston Celtics',
    homeLogo: getLogo('Los Angeles Lakers'),
    awayLogo: getLogo('Boston Celtics'),
    status: 'Live',
    homeScore: 104,
    awayScore: 102,
    startTime: 'Q4 02:18',
    arena: 'Crypto.com Arena',
    broadcaster: 'ESPN',
    storyline:
      'Anthony Davis has 34 points while Jayson Tatum counters with 31 of his own. The Lakers lead after an 8-2 run.',
  },
  {
    id: 'warriors-suns',
    league: 'NBA',
    home: 'Golden State Warriors',
    away: 'Phoenix Suns',
    homeLogo: getLogo('Golden State Warriors'),
    awayLogo: getLogo('Phoenix Suns'),
    status: 'Live',
    homeScore: 97,
    awayScore: 94,
    startTime: 'Q4 05:45',
    arena: 'Chase Center',
    broadcaster: 'TNT',
    storyline:
      'Steph Curry and Kevin Durant are trading deep threes. Golden State forced a turnover to reclaim the lead.',
  },
  {
    id: 'heat-bucks',
    league: 'NBA',
    home: 'Miami Heat',
    away: 'Milwaukee Bucks',
    homeLogo: getLogo('Miami Heat'),
    awayLogo: getLogo('Milwaukee Bucks'),
    status: 'Live',
    homeScore: 112,
    awayScore: 109,
    startTime: 'Q4 03:36',
    arena: 'Kaseya Center',
    broadcaster: 'NBA TV',
    storyline:
      'Giannis Antetokounmpo already has a 32-point double-double, but Tyler Herro’s shooting keeps Miami ahead.',
  },
  {
    id: 'knicks-76ers',
    league: 'NBA',
    home: 'New York Knicks',
    away: 'Philadelphia 76ers',
    homeLogo: getLogo('New York Knicks'),
    awayLogo: getLogo('Philadelphia 76ers'),
    status: 'Live',
    homeScore: 88,
    awayScore: 86,
    startTime: 'Q3 01:09',
    arena: 'Madison Square Garden',
    broadcaster: 'ESPN',
    storyline:
      'Jalen Brunson just hit back-to-back jumpers while the Knicks defense has held Philly scoreless for two minutes.',
  },
  {
    id: 'nuggets-thunder',
    league: 'NBA',
    home: 'Denver Nuggets',
    away: 'Oklahoma City Thunder',
    homeLogo: getLogo('Denver Nuggets'),
    awayLogo: getLogo('Oklahoma City Thunder'),
    status: 'Live',
    homeScore: 76,
    awayScore: 81,
    startTime: 'Q3 05:24',
    arena: 'Ball Arena',
    broadcaster: 'Altitude',
    storyline:
      'Shai Gilgeous-Alexander is carving up Denver with 24 points and six assists while Jokic has already tallied 10 dimes.',
  },
  {
    id: 'lynx-aces',
    league: 'WNBA',
    home: 'Minnesota Lynx',
    away: 'Las Vegas Aces',
    homeLogo: getLogo('Minnesota Lynx'),
    awayLogo: getLogo('Las Vegas Aces'),
    status: 'Live',
    homeScore: 68,
    awayScore: 71,
    startTime: 'Q4 07:58',
    arena: 'Target Center',
    broadcaster: 'CBS Sports',
    storyline:
      'Aces forward A’ja Wilson is dominating inside with 22 points and 12 rebounds while Napheesa Collier battles with 19 and 10.',
  },
  {
    id: 'storm-liberty',
    league: 'WNBA',
    home: 'Seattle Storm',
    away: 'New York Liberty',
    homeLogo: getLogo('Seattle Storm'),
    awayLogo: getLogo('New York Liberty'),
    status: 'Live',
    homeScore: 59,
    awayScore: 65,
    startTime: 'Q3 02:12',
    arena: 'Climate Pledge Arena',
    broadcaster: 'ESPN2',
    storyline:
      'Sabrina Ionescu just drained her fourth triple while Jewell Loyd is keeping Seattle afloat with 21 points.',
  },
  {
    id: 'uconn-duke',
    league: 'NCAAM',
    home: 'UConn Huskies',
    away: 'Duke Blue Devils',
    homeLogo: getLogo('UConn Huskies'),
    awayLogo: getLogo('Duke Blue Devils'),
    status: 'Live',
    homeScore: 58,
    awayScore: 54,
    startTime: '2H 08:43',
    arena: 'Madison Square Garden',
    broadcaster: 'CBS',
    storyline:
      'Elite Eight thriller sees UConn pushing the pace. Tristan Newton has 14 points while Duke leans on freshman Jared McCain.',
  },
  {
    id: 'kansas-unc',
    league: 'NCAAM',
    home: 'Kansas Jayhawks',
    away: 'North Carolina Tar Heels',
    homeLogo: getLogo('Kansas Jayhawks'),
    awayLogo: getLogo('North Carolina Tar Heels'),
    status: 'Live',
    homeScore: 63,
    awayScore: 60,
    startTime: '2H 11:17',
    arena: 'T-Mobile Center',
    broadcaster: 'TBS',
    storyline:
      'Kansas has erased a double-digit deficit thanks to Gradey Dick’s sharpshooting while Armando Bacot dominates the glass for UNC.',
  },
  {
    id: 'baylor-houston',
    league: 'NCAAM',
    home: 'Baylor Bears',
    away: 'Houston Cougars',
    homeLogo: getLogo('Baylor Bears'),
    awayLogo: getLogo('Houston Cougars'),
    status: 'Live',
    homeScore: 51,
    awayScore: 47,
    startTime: '2H 12:41',
    arena: 'Toyota Center',
    broadcaster: 'FS1',
    storyline:
      'Houston’s defense is forcing turnovers, but Baylor guard LJ Cryer has 18 points to maintain a slim lead.',
  },
];

export const pastGames: Game[] = [
  {
    id: 'clippers-grizzlies',
    league: 'NBA',
    home: 'Los Angeles Clippers',
    away: 'Memphis Grizzlies',
    homeLogo: getLogo('Los Angeles Clippers'),
    awayLogo: getLogo('Memphis Grizzlies'),
    status: 'Final',
    homeScore: 118,
    awayScore: 107,
    startTime: 'Final',
    arena: 'Crypto.com Arena',
    broadcaster: 'Bally Sports',
    storyline:
      'Paul George scored 29 and the Clippers hit 18 threes to fend off a late Memphis push.',
  },
  {
    id: 'raptors-bulls',
    league: 'NBA',
    home: 'Toronto Raptors',
    away: 'Chicago Bulls',
    homeLogo: getLogo('Toronto Raptors'),
    awayLogo: getLogo('Chicago Bulls'),
    status: 'Final',
    homeScore: 102,
    awayScore: 99,
    startTime: 'Final',
    arena: 'Scotiabank Arena',
    broadcaster: 'TSN',
    storyline:
      'Scottie Barnes posted a 20-10-6 line while Toronto’s defense held the Bulls to 41% shooting.',
  },
  {
    id: 'spurs-rockets',
    league: 'NBA',
    home: 'San Antonio Spurs',
    away: 'Houston Rockets',
    homeLogo: getLogo('San Antonio Spurs'),
    awayLogo: getLogo('Houston Rockets'),
    status: 'Final',
    homeScore: 111,
    awayScore: 114,
    startTime: 'Final',
    arena: 'Frost Bank Center',
    broadcaster: 'AT&T SportsNet',
    storyline:
      'Rockets guard Jalen Green nailed a go-ahead triple with 19 seconds left to outduel Victor Wembanyama.',
  },
  {
    id: 'storm-mercury',
    league: 'WNBA',
    home: 'Seattle Storm',
    away: 'Phoenix Mercury',
    homeLogo: getLogo('Seattle Storm'),
    awayLogo: getLogo('Phoenix Mercury'),
    status: 'Final',
    homeScore: 84,
    awayScore: 79,
    startTime: 'Final',
    arena: 'Climate Pledge Arena',
    broadcaster: 'ESPN2',
    storyline:
      'Jewell Loyd poured in 27 as the Storm held Phoenix scoreless over the final 90 seconds.',
  },
  {
    id: 'aces-sparks',
    league: 'WNBA',
    home: 'Las Vegas Aces',
    away: 'Los Angeles Sparks',
    homeLogo: getLogo('Las Vegas Aces'),
    awayLogo: getLogo('Los Angeles Sparks'),
    status: 'Final',
    homeScore: 92,
    awayScore: 81,
    startTime: 'Final',
    arena: 'Michelob ULTRA Arena',
    broadcaster: 'ABC',
    storyline:
      'The defending champs used a 15-2 fourth-quarter run fueled by Chelsea Gray’s playmaking to seal the win.',
  },
  {
    id: 'ucla-arizona',
    league: 'NCAAM',
    home: 'UCLA Bruins',
    away: 'Arizona Wildcats',
    homeLogo: getLogo('UCLA Bruins'),
    awayLogo: getLogo('Arizona Wildcats'),
    status: 'Final',
    homeScore: 74,
    awayScore: 71,
    startTime: 'Final',
    arena: 'Pauley Pavilion',
    broadcaster: 'FOX',
    storyline:
      'Bruins advanced in the Pac-12 tournament after Jaime Jaquez Jr. hit a game-winning baseline jumper.',
  },
  {
    id: 'gonzaga-saintmarys',
    league: 'NCAAM',
    home: 'Gonzaga Bulldogs',
    away: "Saint Mary's Gaels",
    homeLogo: getLogo('Gonzaga Bulldogs'),
    awayLogo: getLogo("Saint Mary's Gaels"),
    status: 'Final',
    homeScore: 66,
    awayScore: 62,
    startTime: 'Final',
    arena: 'Orleans Arena',
    broadcaster: 'ESPN',
    storyline:
      'Gonzaga captured the WCC title thanks to Drew Timme’s 24 points and timely defense down the stretch.',
  },
  {
    id: 'duke-virginia',
    league: 'NCAAM',
    home: 'Duke Blue Devils',
    away: 'Virginia Cavaliers',
    homeLogo: getLogo('Duke Blue Devils'),
    awayLogo: getLogo('Virginia Cavaliers'),
    status: 'Final',
    homeScore: 69,
    awayScore: 64,
    startTime: 'Final',
    arena: 'Greensboro Coliseum',
    broadcaster: 'CBS',
    storyline:
      'Duke won the ACC semifinal behind 22 points from Kyle Filipowski and a late defensive stand.',
  },
  {
    id: 'liberty-mystics',
    league: 'WNBA',
    home: 'New York Liberty',
    away: 'Washington Mystics',
    homeLogo: getLogo('New York Liberty'),
    awayLogo: getLogo('Washington Mystics'),
    status: 'Final',
    homeScore: 101,
    awayScore: 93,
    startTime: 'Final',
    arena: 'Barclays Center',
    broadcaster: 'YES Network',
    storyline:
      'Breanna Stewart flirted with a triple-double as the Liberty swept the season series.',
  },
  {
    id: 'heat-cavaliers',
    league: 'NBA',
    home: 'Miami Heat',
    away: 'Cleveland Cavaliers',
    homeLogo: getLogo('Miami Heat'),
    awayLogo: getLogo('Cleveland Cavaliers'),
    status: 'Final',
    homeScore: 96,
    awayScore: 108,
    startTime: 'Final',
    arena: 'Kaseya Center',
    broadcaster: 'Bally Sports',
    storyline:
      'Donovan Mitchell erupted for 41 points to silence the Miami crowd in the fourth quarter.',
  },
];

export const upcomingGames: Game[] = [
  {
    id: 'mavericks-kings',
    league: 'NBA',
    home: 'Dallas Mavericks',
    away: 'Sacramento Kings',
    homeLogo: getLogo('Dallas Mavericks'),
    awayLogo: getLogo('Sacramento Kings'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Thu • 7:30 PM ET',
    arena: 'American Airlines Center',
    broadcaster: 'NBA TV',
    storyline:
      'Luka Dončić and De’Aaron Fox headline a battle between two of the league’s fastest-paced offenses.',
  },
  {
    id: 'warriors-lakers',
    league: 'NBA',
    home: 'Golden State Warriors',
    away: 'Los Angeles Lakers',
    homeLogo: getLogo('Golden State Warriors'),
    awayLogo: getLogo('Los Angeles Lakers'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Fri • 10:00 PM ET',
    arena: 'Chase Center',
    broadcaster: 'ESPN',
    storyline:
      'Steph Curry and LeBron James meet for their final regular-season clash with playoff seeding on the line.',
  },
  {
    id: 'aces-liberty',
    league: 'WNBA',
    home: 'Las Vegas Aces',
    away: 'New York Liberty',
    homeLogo: getLogo('Las Vegas Aces'),
    awayLogo: getLogo('New York Liberty'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Sat • 3:00 PM ET',
    arena: 'Michelob ULTRA Arena',
    broadcaster: 'ABC',
    storyline:
      'A Finals rematch featuring A’ja Wilson and Breanna Stewart in a marquee nationally televised showcase.',
  },
  {
    id: 'sky-sparks',
    league: 'WNBA',
    home: 'Chicago Sky',
    away: 'Los Angeles Sparks',
    homeLogo: getLogo('Chicago Sky'),
    awayLogo: getLogo('Los Angeles Sparks'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Sun • 6:00 PM ET',
    arena: 'Wintrust Arena',
    broadcaster: 'CBS Sports',
    storyline:
      'New look Sky, led by Kahleah Copper, host a Sparks team leaning on top draft pick Cameron Brink.',
  },
  {
    id: 'gonzaga-kansas',
    league: 'NCAAM',
    home: 'Gonzaga Bulldogs',
    away: 'Kansas Jayhawks',
    homeLogo: getLogo('Gonzaga Bulldogs'),
    awayLogo: getLogo('Kansas Jayhawks'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Elite 8 • 5:15 PM ET',
    arena: 'T-Mobile Arena',
    broadcaster: 'CBS',
    storyline:
      'Elite Eight matchup featuring two blue-blood programs with contrasting offensive styles.',
  },
  {
    id: 'uconn-houston',
    league: 'NCAAM',
    home: 'UConn Huskies',
    away: 'Houston Cougars',
    homeLogo: getLogo('UConn Huskies'),
    awayLogo: getLogo('Houston Cougars'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Final Four • 8:49 PM ET',
    arena: 'State Farm Stadium',
    broadcaster: 'TBS',
    storyline:
      'Defending champs face the nation’s top-ranked defense in a Final Four showdown.',
  },
  {
    id: 'thunder-bucks',
    league: 'NBA',
    home: 'Oklahoma City Thunder',
    away: 'Milwaukee Bucks',
    homeLogo: getLogo('Oklahoma City Thunder'),
    awayLogo: getLogo('Milwaukee Bucks'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Mon • 8:00 PM ET',
    arena: 'Paycom Center',
    broadcaster: 'NBA TV',
    storyline:
      'Giannis and Dame visit a surging Thunder squad eager to make a statement at home.',
  },
  {
    id: 'nuggets-suns',
    league: 'NBA',
    home: 'Denver Nuggets',
    away: 'Phoenix Suns',
    homeLogo: getLogo('Denver Nuggets'),
    awayLogo: getLogo('Phoenix Suns'),
    status: 'Upcoming',
    homeScore: 0,
    awayScore: 0,
    startTime: 'Tue • 9:30 PM ET',
    arena: 'Ball Arena',
    broadcaster: 'TNT',
    storyline:
      'Nikola Jokić and Kevin Durant square off in a late-season Western Conference measuring-stick game.',
  },
];

const collections: Game[][] = [liveGames, pastGames, upcomingGames];

export const findGameById = (gameId: string): Game | undefined => {
  for (const group of collections) {
    const found = group.find((game) => game.id === gameId);
    if (found) {
      return found;
    }
  }
  return undefined;
};
