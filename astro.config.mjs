import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()],
    markdown: {
        syntaxHighlight: "prism",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://shiki.style/themes
            theme: 'dracula',
            // Alternatively, provide multiple themes
            // See note below for using dual light/dark themes
            syntaxHighlight: 'prism',
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
            // Disable the default colors
            // https://shiki.style/guide/dual-themes#without-default-color
            // (Added in v4.12.0)
            defaultColor: false,
            // Add custom languages
            // Note: Shiki has countless langs built-in, including .astro!
            // https://shiki.style/languages
            langs: ['liquid','ts','tsx','astro','js','json','jsonc','yaml','bash','diff','css','html','markdown','liquid','python','ruby','rust','toml','xml'],
            // Add custom aliases for languages
            // Map an alias to a Shiki language ID: https://shiki.style/languages#bundled-languages
            // https://shiki.style/guide/load-lang#custom-language-aliases
            langAlias: {
                cjs: "javascript"
            },
            // Enable word wrap to prevent horizontal scrolling
            wrap: true,
            // Add custom transformers: https://shiki.style/guide/transformers
            // Find common transformers: https://shiki.style/packages/transformers
            transformers: [],
        },
    },
});
