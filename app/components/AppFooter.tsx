'use client';

import React from 'react';
import { DiscordIcon, TelegramIcon, TwitterIcon } from './icons';

const AppFooter = () => {
  const socials = [
    { icon: TelegramIcon, name: 'chat', width: 42, link: process.env.NEXT_PUBLIC_TG_CHAT_URL },
    { icon: TelegramIcon, name: 'news', width: 42, link: process.env.NEXT_PUBLIC_TG_NEWS_URL },
    { icon: DiscordIcon, name: 'discord', width: 48, link: process.env.NEXT_PUBLIC_DISCORD_URL },
    { icon: TwitterIcon, name: 'x.com', width: 35, link: process.env.NEXT_PUBLIC_TWITTER_URL }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__social">
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
          <div className="footer__right">
            <a
              href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL}
              target="_blank"
              className="footer__right--item"
            >
              privacy policy
            </a>
            <a
              href={process.env.NEXT_PUBLIC_COOKIE_POLICY_URL}
              target="_blank"
              className="footer__right--item"
            >
              cookie policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
