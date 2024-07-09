import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  integrations: [tailwind(), mdx()],
  service: squooshImageService(),
  output: "server",
      adapter: vercel(),
});
