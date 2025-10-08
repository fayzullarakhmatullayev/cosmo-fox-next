import { DiscordIcon, TelegramIcon, TwitterIcon } from './components/icons';

export const navs = [
  { to: '#about', label: 'nav.about' },
  { to: '#mine', label: 'nav.mine' },
  { to: '#token', label: 'nav.token' },
  { to: '#roadmap', label: 'nav.roadmap' },
  { to: '#partners', label: 'nav.partners' }
];

export const locales = [
  { code: 'en', name: 'en' },
  { code: 'ru', name: 'ru' }
];

export const socials = [
  { icon: TelegramIcon, name: 'chat', width: 42, link: process.env.NEXT_PUBLIC_TG_CHAT_URL },
  { icon: TelegramIcon, name: 'news', width: 42, link: process.env.NEXT_PUBLIC_TG_NEWS_URL },
  { icon: DiscordIcon, name: 'discord', width: 48, link: process.env.NEXT_PUBLIC_DISCORD_URL },
  { icon: TwitterIcon, name: 'x.com', width: 35, link: process.env.NEXT_PUBLIC_TWITTER_URL }
];

export const mines = [
  {
    image: '/images/mine/mine-1.png',
    title: 'mine1.title',
    text: ['mine1.text1', 'mine1.text2'],
    slot: '/images/mine/mine-slot-1.png',
    imageSize: 225,
    top: 13
  },
  {
    image: '/images/mine/mine-2.png',
    title: 'mine2.title',
    text: ['mine2.text1', 'mine2.text2'],
    slot: '/images/mine/mine-slot-2.png',
    imageSize: 225,
    top: 50
  },
  {
    image: '/images/mine/mine-3.png',
    title: 'mine3.title',
    text: ['mine3.text1', 'mine3.text2'],
    slot: '/images/mine/mine-slot-4.png',
    imageSize: 207,
    top: 32
  },
  {
    image: '/images/mine/mine-4.png',
    title: 'mine4.title',
    text: ['mine4.text1', 'mine4.text2'],
    slot: '/images/mine/mine-slot-3.png',
    imageSize: 207,
    top: 68
  }
];
