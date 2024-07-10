import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import netlify from "@astrojs/netlify/functions";
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
  integrations: [tailwind(), mdx()],
  service: squooshImageService(),
  output: "server",
  adapter: vercel(),
  adapter: netlify(),
  adapter: cloudflare(),
});
