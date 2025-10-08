'use client';

import React from 'react';
import { TokenCards, TokenCharts } from '../token';

const Token = () => {
  return (
    <section id="token" className="container">
      <TokenCards />
      <TokenCharts />
    </section>
  );
};

export default Token;
