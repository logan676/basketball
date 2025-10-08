export interface MoreOption {
  id: string;
  title: string;
  icon: string;
  tint?: string;
  danger?: boolean;
  description?: string;
}

export const moreOptions: MoreOption[] = [
  {
    id: 'preferences',
    title: 'Preferences',
    icon: 'settings-outline',
    tint: '#DDE9FF',
    description: 'Customize alerts, themes, and content filters.',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: 'notifications-outline',
    tint: '#D6E8FF',
    description: 'Manage push notifications and digest emails.',
  },
  {
    id: 'about',
    title: 'About',
    icon: 'information-circle-outline',
    tint: '#E4F0FF',
    description: 'Learn more about the Basketball App and team.',
  },
  {
    id: 'help',
    title: 'Help & FAQ',
    icon: 'help-circle-outline',
    tint: '#E8F3FF',
    description: 'Browse common questions or reach out for support.',
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: 'log-out-outline',
    tint: '#FFE3E3',
    danger: true,
    description: 'Sign out of your account on this device.',
  },
];
