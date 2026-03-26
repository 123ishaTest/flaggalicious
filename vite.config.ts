import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],

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
});
