import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://jed-3rd.github.io',
  base: '/ChassisUI',
  integrations: [mdx()],
  vite: {
    ssr: {
      noExternal: ['lit', '@lit/reactive-element', 'lit-html', 'lit-element', '@chassisui/core'],
    },
  },
});
