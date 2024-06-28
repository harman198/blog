import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.harmankhangura.com",
  integrations: [
    tailwind(),
    icon({
      include: {
        tabler: ['*']
      }
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode,
          {
            theme: 'github-dark'
          }
        ]
      ]
    })
  ]
});