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
    id: 'lakers',
    name: 'Lakers',
    city: 'Los Angeles',
    logo:
      'https://images.unsplash.com/photo-1504457047772-27faf1f3f29e?auto=format&fit=crop&w=120&q=80',
    conference: 'West',
    record: '42-20',
    coach: 'Darvin Ham',
    arena: 'Crypto.com Arena',
    overview:
      'A storied franchise with championship pedigree led by LeBron James and Anthony Davis. Plays an up-tempo half-court offense with versatile defensive schemes.',
  },
  {
    id: 'celtics',
    name: 'Celtics',
    city: 'Boston',
    logo:
      'https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?auto=format&fit=crop&w=120&q=80',
    conference: 'East',
    record: '45-18',
    coach: 'Joe Mazzulla',
    arena: 'TD Garden',
    overview:
      'Balanced roster built around elite wing play and switch-heavy defense. The Celtics continue to contend with a deep bench and efficient spacing.',
  },
  {
    id: 'bulls',
    name: 'Bulls',
    city: 'Chicago',
    logo:
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=120&q=80',
    conference: 'East',
    record: '36-28',
    coach: 'Billy Donovan',
    arena: 'United Center',
    overview:
      'Rely on a mix of veteran scorers and young defensive talent. Chicago emphasizes aggressive perimeter defense leading to transition opportunities.',
  },
  {
    id: 'heat',
    name: 'Heat',
    city: 'Miami',
    logo:
      'https://images.unsplash.com/photo-1525971977907-20a11f3f763e?auto=format&fit=crop&w=120&q=80',
    conference: 'East',
    record: '39-25',
    coach: 'Erik Spoelstra',
    arena: 'Kaseya Center',
    overview:
      'The Heat culture centers on conditioning, discipline, and physical defense. Jimmy Butler and Bam Adebayo anchor a lineup that thrives in close games.',
  },
  {
    id: 'spurs',
    name: 'Spurs',
    city: 'San Antonio',
    logo:
      'https://images.unsplash.com/photo-1597160974358-0c014d57f429?auto=format&fit=crop&w=120&q=80',
    conference: 'West',
    record: '29-34',
    coach: 'Gregg Popovich',
    arena: 'Frost Bank Center',
    overview:
      'A young roster developing under legendary coach Gregg Popovich. Known for ball movement, fundamentals, and a focus on long-term player growth.',
  },
];

export const findTeamById = (teamId: string): TeamProfile | undefined =>
  teams.find((team) => team.id === teamId);
