import { defineConfig } from 'alita';

export default defineConfig({
  plugins: ['@alitajs/url-local'],
  urlLocal: {
    alias: {
      'zh-CN': 'zh',
      'zh-TW': 'zhtw',
      'en-US': 'en',
    },
  },
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator: '-',
  },
});
