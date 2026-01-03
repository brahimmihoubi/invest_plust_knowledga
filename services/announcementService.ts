import { Announcement } from '../types';

export const announcements: Announcement[] = [
  {
    id: '2',
    title: 'New Investment Project Launched',
    content: 'We are excited to announce our newest solar energy initiative in North Africa. Join the preliminary review now.',
    date: '2025-12-20',
    type: 'success',
    videoUrl: 'https://youtu.be/kQo1C-04Vlw'
  },
  {
    id: '3',
    title: 'Upcoming Expert Webinar',
    content: 'Don\'t miss our live session on Market Trends 2026. Register through the admin portal.',
    date: '2025-12-15',
    type: 'info'
  }
];

export const getLatestAnnouncements = () => {
  return [...announcements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
