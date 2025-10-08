export type PlayerTab = 'All' | 'My Players' | 'Favorites';

export interface PlayerProfile {
  id: string;
  name: string;
  team: string;
  image: string;
  favorite: boolean;
  position: string;
  height: string;
  weight: string;
  age: number;
  bio: string;
  stats: {
    points: number;
    rebounds: number;
    assists: number;
  };
}

export const playerTabs: PlayerTab[] = ['All', 'My Players', 'Favorites'];

export const players: PlayerProfile[] = [
  {
    id: 'lebron-james',
    name: 'LeBron James',
    team: 'Los Angeles Lakers',
    image:
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=200&q=80',
    favorite: true,
    position: 'Forward',
    height: "6'9\"",
    weight: '250 lbs',
    age: 39,
    bio: 'Four-time NBA champion and one of the greatest all-around players in league history. Leads the Lakers with playmaking and veteran leadership.',
    stats: {
      points: 25.4,
      rebounds: 7.8,
      assists: 8.1,
    },
  },
  {
    id: 'stephen-curry',
    name: 'Stephen Curry',
    team: 'Golden State Warriors',
    image:
      'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=200&q=80',
    favorite: true,
    position: 'Guard',
    height: "6'2\"",
    weight: '185 lbs',
    age: 36,
    bio: 'Sharpshooting guard redefining perimeter offense. Known for his limitless range, quick release, and off-ball movement.',
    stats: {
      points: 28.3,
      rebounds: 4.5,
      assists: 6.2,
    },
  },
  {
    id: 'giannis-antetokounmpo',
    name: 'Giannis Antetokounmpo',
    team: 'Milwaukee Bucks',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    favorite: false,
    position: 'Forward',
    height: "6'11\"",
    weight: '242 lbs',
    age: 29,
    bio: 'Two-time MVP with elite athleticism and defensive instincts. Powers the Bucks with relentless drives and interior dominance.',
    stats: {
      points: 30.1,
      rebounds: 11.2,
      assists: 5.8,
    },
  },
  {
    id: 'jayson-tatum',
    name: 'Jayson Tatum',
    team: 'Boston Celtics',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=200&q=80',
    favorite: false,
    position: 'Forward',
    height: "6'8\"",
    weight: '210 lbs',
    age: 26,
    bio: 'Dynamic scorer with a polished mid-range game and growing playmaking chops. Anchors Boston’s wing-heavy attack.',
    stats: {
      points: 27.3,
      rebounds: 8.6,
      assists: 4.5,
    },
  },
  {
    id: 'luka-doncic',
    name: 'Luka Dončić',
    team: 'Dallas Mavericks',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=200&q=80',
    favorite: true,
    position: 'Guard',
    height: "6'7\"",
    weight: '230 lbs',
    age: 25,
    bio: 'Versatile guard who blends size with elite court vision. Constant triple-double threat orchestrating the Mavericks pick-and-roll attack.',
    stats: {
      points: 32.2,
      rebounds: 9.1,
      assists: 8.8,
    },
  },
];

export const findPlayerById = (playerId: string): PlayerProfile | undefined =>
  players.find((player) => player.id === playerId);
