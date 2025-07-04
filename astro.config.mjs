import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/your-username',
  base: '/shrine',
  output: 'static',
  build: {
    assets: 'assets'
  }
});