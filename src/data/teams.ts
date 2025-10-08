export type TeamTab = 'All' | 'Favorites' | 'Following';

export interface TeamProfile {
  id: string;
  name: string;
  city: string;
  logo: string;
  conference: 'East' | 'West';
  record: string;
  coach: string;
  arena: string;
  overview: string;
}

export const teamTabs: TeamTab[] = ['All', 'Favorites', 'Following'];

export const teams: TeamProfile[] = [
  {
    id: 'hawks',
    name: 'Hawks',
    city: 'Atlanta',
    logo: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.png',
    conference: 'East',
    record: '31-31',
    coach: 'Quin Snyder',
    arena: 'State Farm Arena',
    overview:
      'Pushes the pace with Trae Young orchestrating pick-and-rolls while lengthy wings apply pressure on defense.',
  },
  {
    id: 'celtics',
    name: 'Celtics',
    city: 'Boston',
    logo: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.png',
    conference: 'East',
    record: '48-14',
    coach: 'Joe Mazzulla',
    arena: 'TD Garden',
    overview:
      'Wing-heavy roster headlined by Jayson Tatum and Jaylen Brown. Switchable defense and elite three-point volume.',
  },
  {
    id: 'nets',
    name: 'Nets',
    city: 'Brooklyn',
    logo: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.png',
    conference: 'East',
    record: '29-34',
    coach: 'Kevin Ollie',
    arena: 'Barclays Center',
    overview:
      'Lengthy wings and quick guards surrounding Mikal Bridges with spacing and aggressive point-of-attack defense.',
  },
  {
    id: 'hornets',
    name: 'Hornets',
    city: 'Charlotte',
    logo: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.png',
    conference: 'East',
    record: '20-42',
    coach: 'Steve Clifford',
    arena: 'Spectrum Center',
    overview:
      'LaMelo Ball fuels a young core intent on running in transition and showcasing athletic wings.',
  },
  {
    id: 'bulls',
    name: 'Bulls',
    city: 'Chicago',
    logo: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.png',
    conference: 'East',
    record: '33-32',
    coach: 'Billy Donovan',
    arena: 'United Center',
    overview:
      'Veteran-led squad focusing on half-court execution with DeMar DeRozan and Zach LaVine generating mid-range looks.',
  },
  {
    id: 'cavaliers',
    name: 'Cavaliers',
    city: 'Cleveland',
    logo: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.png',
    conference: 'East',
    record: '39-25',
    coach: 'J.B. Bickerstaff',
    arena: 'Rocket Mortgage FieldHouse',
    overview:
      'Defensive identity anchored by Evan Mobley and Jarrett Allen while Donovan Mitchell carries the scoring load.',
  },
  {
    id: 'mavericks',
    name: 'Mavericks',
    city: 'Dallas',
    logo: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.png',
    conference: 'West',
    record: '38-26',
    coach: 'Jason Kidd',
    arena: 'American Airlines Center',
    overview:
      'Luka Dončić and Kyrie Irving headline a heavy pick-and-roll offense with shooting at every position.',
  },
  {
    id: 'nuggets',
    name: 'Nuggets',
    city: 'Denver',
    logo: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.png',
    conference: 'West',
    record: '44-19',
    coach: 'Michael Malone',
    arena: 'Ball Arena',
    overview:
      'Nikola Jokić orchestrates a motion-heavy attack with Jamal Murray thriving as a secondary creator.',
  },
  {
    id: 'pistons',
    name: 'Pistons',
    city: 'Detroit',
    logo: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.png',
    conference: 'East',
    record: '12-52',
    coach: 'Monty Williams',
    arena: 'Little Caesars Arena',
    overview:
      'Rebuilding roster featuring Cade Cunningham and a frontcourt full of developing length and athleticism.',
  },
  {
    id: 'warriors',
    name: 'Warriors',
    city: 'Golden State',
    logo: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.png',
    conference: 'West',
    record: '36-28',
    coach: 'Steve Kerr',
    arena: 'Chase Center',
    overview:
      'Steph Curry stretches defenses while the roster leans on motion offense, split actions, and veteran IQ.',
  },
  {
    id: 'rockets',
    name: 'Rockets',
    city: 'Houston',
    logo: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.png',
    conference: 'West',
    record: '30-35',
    coach: 'Ime Udoka',
    arena: 'Toyota Center',
    overview:
      'Jalen Green and Alperen Şengün headline an energetic group emphasizing defense-first principles.',
  },
  {
    id: 'pacers',
    name: 'Pacers',
    city: 'Indiana',
    logo: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.png',
    conference: 'East',
    record: '37-29',
    coach: 'Rick Carlisle',
    arena: 'Gainbridge Fieldhouse',
    overview:
      'Tyrese Haliburton drives one of the league’s fastest offenses, pushing tempo and firing early threes.',
  },
  {
    id: 'clippers',
    name: 'Clippers',
    city: 'Los Angeles',
    logo: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.png',
    conference: 'West',
    record: '41-22',
    coach: 'Tyronn Lue',
    arena: 'Crypto.com Arena',
    overview:
      'Stars Kawhi Leonard and Paul George lead a deliberate half-court offense emphasizing mismatches and isolation.',
  },
  {
    id: 'lakers',
    name: 'Lakers',
    city: 'Los Angeles',
    logo: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.png',
    conference: 'West',
    record: '39-30',
    coach: 'Darvin Ham',
    arena: 'Crypto.com Arena',
    overview:
      'Veteran group surrounding LeBron James and Anthony Davis with defenders and shooters to chase another playoff run.',
  },
  {
    id: 'grizzlies',
    name: 'Grizzlies',
    city: 'Memphis',
    logo: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.png',
    conference: 'West',
    record: '24-43',
    coach: 'Taylor Jenkins',
    arena: 'FedExForum',
    overview:
      'Young, gritty roster that defends at a high level and thrives in transition when Ja Morant is on the floor.',
  },
  {
    id: 'heat',
    name: 'Heat',
    city: 'Miami',
    logo: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.png',
    conference: 'East',
    record: '38-30',
    coach: 'Erik Spoelstra',
    arena: 'Kaseya Center',
    overview:
      'Team-first culture built on toughness and execution. Jimmy Butler and Bam Adebayo set the tone on both ends.',
  },
  {
    id: 'bucks',
    name: 'Bucks',
    city: 'Milwaukee',
    logo: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.png',
    conference: 'East',
    record: '45-20',
    coach: 'Doc Rivers',
    arena: 'Fiserv Forum',
    overview:
      'Giannis Antetokounmpo dominates the paint while Damian Lillard stretches defenses with deep shooting.',
  },
  {
    id: 'timberwolves',
    name: 'Timberwolves',
    city: 'Minnesota',
    logo: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.png',
    conference: 'West',
    record: '43-22',
    coach: 'Chris Finch',
    arena: 'Target Center',
    overview:
      'Top-ranked defense behind Rudy Gobert while Anthony Edwards blossoms into a premier two-way star.',
  },
  {
    id: 'pelicans',
    name: 'Pelicans',
    city: 'New Orleans',
    logo: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.png',
    conference: 'West',
    record: '40-25',
    coach: 'Willie Green',
    arena: 'Smoothie King Center',
    overview:
      'Zion Williamson and Brandon Ingram spearhead an offense rich with length and versatile defenders.',
  },
  {
    id: 'knicks',
    name: 'Knicks',
    city: 'New York',
    logo: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.png',
    conference: 'East',
    record: '41-24',
    coach: 'Tom Thibodeau',
    arena: 'Madison Square Garden',
    overview:
      'Physical identity backed by Jalen Brunson’s clutch scoring and a defense that grinds possessions.',
  },
  {
    id: 'thunder',
    name: 'Thunder',
    city: 'Oklahoma City',
    logo: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.png',
    conference: 'West',
    record: '45-19',
    coach: 'Mark Daigneault',
    arena: 'Paycom Center',
    overview:
      'Shai Gilgeous-Alexander leads a deep, switchable group that shares the ball and attacks mismatches.',
  },
  {
    id: 'magic',
    name: 'Magic',
    city: 'Orlando',
    logo: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.png',
    conference: 'East',
    record: '37-29',
    coach: 'Jamahl Mosley',
    arena: 'Kia Center',
    overview:
      'Long, defensive-minded roster with Paolo Banchero emerging as the primary scorer and playmaker.',
  },
  {
    id: '76ers',
    name: '76ers',
    city: 'Philadelphia',
    logo: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.png',
    conference: 'East',
    record: '40-24',
    coach: 'Nick Nurse',
    arena: 'Wells Fargo Center',
    overview:
      'Joel Embiid anchors the interior while Tyrese Maxey’s speed and shooting keep defenses honest.',
  },
  {
    id: 'suns',
    name: 'Suns',
    city: 'Phoenix',
    logo: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.png',
    conference: 'West',
    record: '38-27',
    coach: 'Frank Vogel',
    arena: 'Footprint Center',
    overview:
      'Big three of Kevin Durant, Devin Booker, and Bradley Beal headline a roster built around spacing and mid-range mastery.',
  },
  {
    id: 'trail-blazers',
    name: 'Trail Blazers',
    city: 'Portland',
    logo: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.png',
    conference: 'West',
    record: '19-45',
    coach: 'Chauncey Billups',
    arena: 'Moda Center',
    overview:
      'Rebuild in progress with Scoot Henderson steering a young, athletic core focused on development.',
  },
  {
    id: 'kings',
    name: 'Kings',
    city: 'Sacramento',
    logo: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.png',
    conference: 'West',
    record: '40-26',
    coach: 'Mike Brown',
    arena: 'Golden 1 Center',
    overview:
      'High-octane offense featuring De’Aaron Fox’s speed and Domantas Sabonis’ playmaking from the elbows.',
  },
  {
    id: 'spurs',
    name: 'Spurs',
    city: 'San Antonio',
    logo: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.png',
    conference: 'West',
    record: '18-48',
    coach: 'Gregg Popovich',
    arena: 'Frost Bank Center',
    overview:
      'Victor Wembanyama headlines a patient rebuild focusing on ball movement, fundamentals, and length.',
  },
  {
    id: 'raptors',
    name: 'Raptors',
    city: 'Toronto',
    logo: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.png',
    conference: 'East',
    record: '25-41',
    coach: 'Darko Rajaković',
    arena: 'Scotiabank Arena',
    overview:
      'Scottie Barnes leads a long, switchable core that thrives forcing turnovers and running the floor.',
  },
  {
    id: 'jazz',
    name: 'Jazz',
    city: 'Utah',
    logo: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.png',
    conference: 'West',
    record: '31-35',
    coach: 'Will Hardy',
    arena: 'Delta Center',
    overview:
      'Balanced attack featuring Lauri Markkanen’s perimeter shooting and a roster full of skilled playmakers.',
  },
  {
    id: 'wizards',
    name: 'Wizards',
    city: 'Washington',
    logo: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.png',
    conference: 'East',
    record: '14-50',
    coach: 'Brian Keefe',
    arena: 'Capital One Arena',
    overview:
      'Rebuilding franchise highlighting Jordan Poole and Kyle Kuzma while cultivating young prospects.',
  },
];

export const findTeamById = (teamId: string): TeamProfile | undefined =>
  teams.find((team) => team.id === teamId);
