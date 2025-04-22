import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  reporter: [['html', { outputFolder: 'reports' }]], // HTML report
  use: {
    video: 'on',
    trace: 'on', // Optional: Enable tracing for more detailed evidence
    // Removed invalid property 'outputDir'
  },
});