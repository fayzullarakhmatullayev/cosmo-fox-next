import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

module.exports = withNextIntl({
  // Your Next.js config
});
