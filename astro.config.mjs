import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  service: squooshImageService(),

});
