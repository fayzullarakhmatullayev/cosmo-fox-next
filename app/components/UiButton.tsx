import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'small' | 'large' | 'medium' | undefined;
  href?: string | undefined;
  target?: string | undefined;
  rel?: string | undefined;
  className?: string | undefined;
  onClick?: () => void;
};

const UiButton = ({
  children,
  variant = 'small',
  href = '#',
  target = '_self',
  className = '',
  rel,
  onClick
}: Props) => {
  const clickHandler = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <a
      className={`ui-button ${className} ${variant}`}
      href={href}
      target={target}
      rel={rel}
      onClick={clickHandler}
    >
      {children}
    </a>
  );
};

export default UiButton;
