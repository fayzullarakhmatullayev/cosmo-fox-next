import React from 'react';
import { DiscordIcon, TelegramIcon, TwitterIcon } from './icons';
import { useTranslations } from 'next-intl';

type Props = {
  navs: { to: string; label: string }[];
  onClose: () => void;
};

const MobileMenu = ({ navs, onClose }: Props) => {
  const t = useTranslations();

  const socials = [
    { icon: TelegramIcon, name: 'chat', width: 42, link: process.env.NEXT_PUBLIC_TG_CHAT_URL },
    { icon: TelegramIcon, name: 'news', width: 42, link: process.env.NEXT_PUBLIC_TG_NEWS_URL },
    { icon: DiscordIcon, name: 'discord', width: 48, link: process.env.NEXT_PUBLIC_DISCORD_URL },
    { icon: TwitterIcon, name: 'x.com', width: 35, link: process.env.NEXT_PUBLIC_TWITTER_URL }
  ];

  const handleLinkClick = () => {
    setTimeout(() => onClose(), 100);
  };

  return (
    <div className="mobile__menu">
      <nav className="mobile__menu--links">
        {navs.map(({ to, label }) => (
          <a key={label} href={to} onClick={handleLinkClick}>
            {t(label)}
          </a>
        ))}

        <a href="config.public.whitePaperUrl" target="_blank">
          {t('nav.white-paper')}
        </a>
        <a href="config.public.blogUrl" target="_blank">
          {t('nav.blog')}
        </a>
      </nav>
      <div className="mobile__menu--social">
        {socials.map(({ icon: Icon, name, width, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--item"
          >
            <div style={{ width }}>
              <Icon />
            </div>
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
