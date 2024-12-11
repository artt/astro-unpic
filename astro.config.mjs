// @ts-check
import { defineConfig } from 'astro/config';
import { imageService } from "@unpic/astro/service";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService(),
  },
  adapter: netlify(),
});
