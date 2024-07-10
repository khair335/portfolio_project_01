import { defineConfig, passthroughImageService } from 'astro/config';
import { imageService } from "@unpic/astro/service";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import netlify from "@astrojs/netlify/functions";
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
  integrations: [tailwind(), mdx()],
   service: passthroughImageService(),
  output: "server",
  adapter: vercel(),
  adapter: netlify(),
  adapter: cloudflare({
    mode: 'directory', // Or 'advanced'
    compatibilityFlags: ['nodejs_compat']
  }),
});
