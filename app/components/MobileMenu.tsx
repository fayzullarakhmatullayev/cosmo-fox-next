import React from 'react';
import { useTranslations } from 'next-intl';
import { socials, navs } from '../constants';

type Props = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: Props) => {
  const t = useTranslations();

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
