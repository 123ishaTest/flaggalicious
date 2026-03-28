import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    {
      name: 'simpleanalytics',
      transformIndexHtml(html) {
        console.log('AAAAAAAAAAAAAAAAAA');
        const file = mode === 'development' ? 'latest.dev.js' : 'latest.js';
        return {
          html,
          tags: [
            {
              tag: 'script',
              attrs: {
                async: true,
                'data-collect-dnt': true,
                src: `https://scripts.simpleanalyticscdn.com/${file}`,
              },
              injectTo: 'head',
            },
          ],
        };
      },
    },

    tailwindcss(),
    sveltekit(),
  ],

  server: {
    watch: {
      ignored: ['**/.louter/**'],
    },
  },
  test: {
    expect: { requireAssertions: true },
    projects: [
      {
        extends: './vite.config.ts',
        test: {
          name: 'server',
          environment: 'node',
          include: ['tests/**/*.{test,spec}.{js,ts}'],
          exclude: ['tests/**/*.svelte.{test,spec}.{js,ts}'],
        },
      },
    ],
  },
}));
