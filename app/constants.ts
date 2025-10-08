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

export const tokenCards = [
  { image: '/images/token/token-1.png', text: 'token.text1' },
  { image: '/images/token/token-2.png', text: 'token.text2' },
  { image: '/images/token/token-3.png', text: 'token.text3' },
  { image: '/images/token/token-4.png', text: 'token.text4' }
];

export const tokenCharts = [
  {
    id: 1,
    colors: ['#468DFF', '#005373'],
    category: '15% Team',
    tokens: 150,
    vesting: '12-month cliff - 24-month linear vesting'
  },
  {
    id: 2,
    colors: ['#60FFA2', '#02CD56'],
    category: '10% Private sale',
    tokens: 100,
    vesting: '1-month cliff - 12-month linear vesting'
  },
  {
    id: 3,
    colors: ['#FF7373', '#D72626'],
    category: '15% Pre-sale',
    tokens: 150,
    vesting: 'No cliff - 9-month linear vesting'
  },
  {
    id: 4,
    colors: ['#E3FF66', '#EF7B00'],
    category: '20% Marketing & Community',
    tokens: 200,
    vesting: '10% at tge - 12-month linear vesting'
  },
  {
    id: 5,
    colors: ['#BB68FF', '#590B99'],
    category: '10% Liquidity & Listing',
    tokens: 100,
    vesting: '100% unlocked at TGE'
  },
  {
    id: 6,
    colors: ['#76FAFF', '#009196'],
    category: '10% Treasury',
    tokens: 100,
    vesting: '18-month linear vesting'
  },
  {
    id: 7,
    colors: ['#7573E0', '#3E3C9E'],
    category: '15% Play-to-earn',
    tokens: 100,
    vesting: '12-month linear vesting'
  },
  {
    id: 8,
    colors: ['#FEB8DF', '#EF03A4'],
    category: '5% Advisors',
    tokens: 50,
    vesting: '6-month cliff - 18-month linear vesting'
  }
];

export const roadmap = [
  {
    date: 'roadmap.listTitle1',
    text: 'roadmap.listText1',
    planet: '/images/roadmap/planet-1.png',
    line: '/images/roadmap/line-1.png',
    mobileLine: '/images/roadmap/line-mobile-1.png'
  },
  {
    date: 'roadmap.listTitle2',
    text: 'roadmap.listText2',
    planet: '/images/roadmap/planet-2.png',
    line: '/images/roadmap/line-2.png',
    mobileLine: '/images/roadmap/line-mobile-2.png'
  },
  {
    date: 'roadmap.listTitle3',
    text: 'roadmap.listText3',
    planet: '/images/roadmap/planet-3.png',
    line: '/images/roadmap/line-3.png',
    mobileLine: '/images/roadmap/line-mobile-3.png'
  },
  {
    date: 'roadmap.listTitle4',
    text: 'roadmap.listText4',
    planet: '/images/roadmap/planet-4.png',
    line: '/images/roadmap/line-4.png',
    mobileLine: '/images/roadmap/line-mobile-4.png'
  },
  {
    date: 'roadmap.listTitle5',
    text: 'roadmap.listText5',
    planet: '/images/roadmap/planet-5.png',
    line: '/images/roadmap/line-5.png',
    mobileLine: '/images/roadmap/line-mobile-5.png'
  },
  {
    date: 'roadmap.listTitle6',
    text: 'roadmap.listText6',
    planet: '/images/roadmap/planet-6.png',
    line: '/images/roadmap/line-6.png',
    mobileLine: '/images/roadmap/line-mobile-6.png'
  },
  {
    date: 'roadmap.listTitle7',
    text: 'roadmap.listText7',
    planet: '/images/roadmap/planet-7.png',
    line: '/images/roadmap/line-7.png',
    mobileLine: '/images/roadmap/line-mobile-7.png'
  },
  {
    date: 'roadmap.listTitle8',
    text: 'roadmap.listText8',
    planet: '/images/roadmap/planet-8.png',
    line: '/images/roadmap/line-8.png',
    mobileLine: '/images/roadmap/line-mobile-8.png'
  },
  {
    date: 'roadmap.listTitle9',
    text: 'roadmap.listText9',
    planet: '/images/roadmap/planet-9.png',
    line: null,
    mobileLine: null
  }
];

export const partners = [
  {
    image: '/images/partners/partner-1.png',
    height: 47,
    link: process.env.NEXT_PUBLIC_MEDICI_URL
  },
  {
    image: '/images/partners/partner-2.png',
    height: 43,
    link: process.env.NEXT_PUBLIC_ICODA_URL
  },
  {
    image: '/images/partners/partner-3.png',
    height: 56,
    link: process.env.NEXT_PUBLIC_CICADA_URL
  },
  {
    image: '/images/partners/partner-4.png',
    height: 54,
    link: process.env.NEXT_PUBLIC_TON_URL
  }
];

export const partnerLinks = [
  { title: 'Cookie policy', link: process.env.NEXT_PUBLIC_COOKIE_POLICY_URL },
  { title: 'privacy policy', link: process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL },
  { title: 'tokenomic', link: process.env.NEXT_PUBLIC_TOKENOMIC_URL },
  { title: 'blog', link: process.env.NEXT_PUBLIC_BLOG_URL }
];
