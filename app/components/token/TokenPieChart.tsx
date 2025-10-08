'use client';

import { useState, useEffect, useRef, useMemo, useImperativeHandle, forwardRef } from 'react';
import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ItemType {
  id: number;
  colors: string[];
  category: string;
  tokens: number;
  vesting: string;
}

interface TokenPieChartProps {
  items: ItemType[];
  hoveredItem: ItemType | null;
  isMobile: boolean;
  onHoveredItemChange: (item: ItemType | null) => void;
}

const TokenPieChartInner = forwardRef<any, TokenPieChartProps>(
  ({ items, hoveredItem, isMobile, onHoveredItemChange }, ref) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return () => setIsMounted(false);
    }, []);

    const chartSize = useMemo(() => (isMobile ? 160 : 320), [isMobile]);

    const seriesWithGaps = useMemo(() => {
      const result: number[] = [];
      const gapSize = 8;

      items.forEach((item, index) => {
        result.push(item.tokens);
        if (index < items.length - 1) {
          result.push(gapSize);
        }
      });
      result.push(gapSize);
      return result;
    }, [items]);

    const colorsWithGaps = useMemo(() => {
      const result: string[] = [];
      items.forEach((item, index) => {
        result.push(item.colors[0]!);
        if (index < items.length - 1) {
          result.push('transparent');
        }
      });
      result.push('transparent');
      return result;
    }, [items]);

    const gradientColorsWithGaps = useMemo(() => {
      const result: string[] = [];
      items.forEach((item, index) => {
        result.push(item.colors[1]!);
        if (index < items.length - 1) {
          result.push('transparent');
        }
      });
      result.push('transparent');
      return result;
    }, [items]);

    const getItemIndexFromChartIndex = (chartIndex: number) => {
      if (chartIndex % 2 === 1) return null;
      return Math.floor(chartIndex / 2);
    };

    const simulateChartHover = (itemIndex: number | null) => {
      if (!chartContainerRef.current || !isMounted) return;

      try {
        const chartElement = chartContainerRef.current.querySelector('.apexcharts-canvas');
        if (!chartElement) return;

        const allSlices = chartElement.querySelectorAll('.apexcharts-series path');
        if (!allSlices || allSlices.length === 0) return;

        allSlices.forEach((slice: Element) => {
          const htmlSlice = slice as HTMLElement;
          if (htmlSlice && htmlSlice.style) {
            htmlSlice.style.transform = 'scale(1)';
            htmlSlice.style.transformOrigin = 'center';
            htmlSlice.style.transition = 'transform 0.2s ease-out';
            htmlSlice.style.willChange = 'transform';
          }
        });

        if (itemIndex !== null) {
          const chartIndex = itemIndex * 2;
          if (allSlices[chartIndex]) {
            const targetSlice = allSlices[chartIndex] as HTMLElement;
            if (targetSlice && targetSlice.style) {
              targetSlice.style.transform = 'scale(1.1)';
              targetSlice.style.transformOrigin = 'center';
              targetSlice.style.transition = 'transform 0.2s ease-out';
              targetSlice.style.willChange = 'transform';
            }
          }
        }
      } catch (error) {
        console.error('Error in simulateChartHover:', error);
      }
    };

    useImperativeHandle(ref, () => ({
      simulateChartHover
    }));

    useEffect(() => {
      if (!isMounted) return;

      const timer = setTimeout(() => {
        if (hoveredItem) {
          const itemIndex = items.findIndex((item) => item.id === hoveredItem.id);
          simulateChartHover(itemIndex);
        } else {
          simulateChartHover(null);
        }
      }, 100);

      return () => clearTimeout(timer);
    }, [hoveredItem, items, isMounted]);

    const options: ApexOptions = useMemo(
      () => ({
        chart: {
          type: 'donut',
          background: 'transparent',
          events: {
            dataPointMouseEnter: function (event: any, chartContext: any, config: any) {
              try {
                const chartIdx = config.dataPointIndex;
                const itemIndex = getItemIndexFromChartIndex(chartIdx);

                if (itemIndex === null) return;

                const slice = chartContext.w.globals.dom.baseEl?.querySelector(
                  `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
                );
                if (slice && slice.style) {
                  slice.style.transform = 'scale(1.1)';
                  slice.style.transformOrigin = 'center';
                  slice.style.transition = 'transform 0.2s ease-out';
                  slice.style.willChange = 'transform';
                  slice.style.backfaceVisibility = 'hidden';
                  slice.style.perspective = '1000px';
                }
                const hoveredItem = items[itemIndex];
                if (hoveredItem) {
                  onHoveredItemChange(hoveredItem);
                }
              } catch (error) {
                console.error('Error in dataPointMouseEnter:', error);
              }
            },
            dataPointMouseLeave: function (event: any, chartContext: any, config: any) {
              try {
                const chartIdx = config.dataPointIndex;
                const itemIndex = getItemIndexFromChartIndex(chartIdx);

                if (itemIndex === null) return;

                const slice = chartContext.w.globals.dom.baseEl?.querySelector(
                  `.apexcharts-series[data\\:realIndex="${chartIdx}"] path`
                );
                if (slice && slice.style) {
                  slice.style.transform = 'scale(1)';
                  slice.style.willChange = 'auto';
                  slice.style.backfaceVisibility = 'visible';
                  slice.style.perspective = 'none';
                }
                onHoveredItemChange(null);
              } catch (error) {
                console.error('Error in dataPointMouseLeave:', error);
              }
            }
          }
        },
        labels: { show: false } as any,
        legend: { show: false },
        dataLabels: { enabled: false },
        stroke: {
          width: 0
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '65%',
              background: 'transparent'
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            gradientToColors: gradientColorsWithGaps,
            stops: [0, 100]
          }
        },
        colors: colorsWithGaps,
        tooltip: {
          enabled: false
        },
        states: {
          hover: {
            filter: { type: 'none' }
          },
          active: {
            filter: { type: 'none' },
            allowMultipleDataPointsSelection: false
          }
        }
      }),
      [colorsWithGaps, gradientColorsWithGaps, items, onHoveredItemChange]
    );

    if (!isMounted) {
      return null;
    }

    return (
      <div className="chart" ref={chartContainerRef}>
        <Chart
          type="donut"
          options={options}
          series={seriesWithGaps}
          width={chartSize}
          height={chartSize}
        />

        <style jsx>{`
          :global(.apexcharts-canvas) {
            position: relative;
            z-index: 1;
          }

          :global(.apexcharts-canvas .apexcharts-series) {
            overflow: visible !important;
          }

          :global(.apexcharts-canvas .apexcharts-series path) {
            transition: transform 0.2s ease-out;
            transform-origin: center;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            position: relative;
            z-index: 2;
          }

          :global(.apexcharts-canvas .apexcharts-series path[fill='transparent']) {
            pointer-events: none;
          }

          :global(.apexcharts-canvas .apexcharts-series path:hover) {
            z-index: 10;
            position: relative;
          }

          .chart {
            overflow: visible !important;
          }

          :global(.chart .apexcharts-svg) {
            overflow: visible !important;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          :global(.chart .apexcharts-canvas),
          :global(.chart .apexcharts-inner) {
            overflow: visible !important;
          }

          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .chart {
                position: relative;
                z-index: 1;
              }

              :global(.chart .apexcharts-series path) {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
              }
            }
          }
        `}</style>
      </div>
    );
  }
);

TokenPieChartInner.displayName = 'TokenPieChartInner';

const TokenPieChart = forwardRef<any, TokenPieChartProps>((props, ref) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <TokenPieChartInner {...props} ref={ref} />;
});

TokenPieChart.displayName = 'TokenPieChart';

export default TokenPieChart;
