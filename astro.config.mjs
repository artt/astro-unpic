// @ts-check
import { defineConfig } from 'astro/config';
import { imageService } from "@unpic/astro/service";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService(),
  },

  adapter: vercel({
    imageService: true,
  }),
});