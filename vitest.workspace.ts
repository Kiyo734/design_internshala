import path from 'path';
import { fileURLToPath } from 'url';
import { defineWorkspace } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    plugins: [
      storybookTest({ 
        configDir: path.join(dirname, '.storybook') 
      }),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright'
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
    },
  },
]);