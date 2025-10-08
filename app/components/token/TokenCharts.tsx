'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChartInnerLayerIcon, ChartTopLayerIcon } from '../icons';
import TokenPieChart from './TokenPieChart';
import { tokenCharts } from '@/app/constants';

type TokenomicsItem = (typeof tokenCharts)[number];

const TokenCharts = () => {
  const t = useTranslations();
  const [hoveredItem, setHoveredItem] = useState<TokenomicsItem | null>(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const pieChartRef = useRef<HTMLDivElement>(null);

  const handleTableRowHover = (item: TokenomicsItem) => {
    setHoveredItem(item);
  };

  const handleTableRowLeave = () => {
    setHoveredItem(null);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const isMobileScreen = useMemo(() => screenWidth < 576, [screenWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="token-charts">
      <h2 className="title">{t('token_vesting')}</h2>
      <div className="charts__wrapper">
        <div className="chart-container">
          <div className="chart-top-layer">
            <ChartTopLayerIcon />
          </div>
          <div className="chart-inner-layer">
            <ChartInnerLayerIcon />
          </div>
          <TokenPieChart
            ref={pieChartRef}
            key={`${tokenCharts.length}-${isMobileScreen}`}
            items={tokenCharts}
            isMobile={isMobileScreen}
            hoveredItem={hoveredItem}
            onHoveredItemChange={setHoveredItem}
          />
        </div>
        <div className="table-container">
          <div className="table-inner">
            <table className="table">
              <thead>
                <tr>
                  <th>category, %</th>
                  <th>tokens (M)</th>
                  <th>vesting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="top-border">
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                {tokenCharts.map((item) => (
                  <tr
                    key={item.id}
                    onMouseEnter={() => handleTableRowHover(item)}
                    onMouseLeave={handleTableRowLeave}
                    className={item.id === hoveredItem?.id ? 'active' : ''}
                  >
                    <td>
                      <div className="table-color-wrapper">
                        <span
                          className="table-color"
                          style={{
                            background: `linear-gradient(to right, ${item.colors[0]}, ${item.colors[1]})`
                          }}
                        />
                        <p>{item.category}</p>
                      </div>
                    </td>
                    <td>
                      <p className="table-tokens">{item.tokens}</p>
                    </td>
                    <td>
                      <p className="table-vesting">{item.vesting}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCharts;
