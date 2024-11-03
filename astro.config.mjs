import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://2025.empirejs.org',
  integrations: [mdx()],
});