import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // folder where your spec files are
  timeout: 60000,       // max time per test
  workers: 1,           // run tests sequentially
  reporter: [
    ['list'],           // terminal output
    ['allure-playwright']  // allure report
  ],
  use: {
    headless: false,              // run in visible Chrome browser
    slowMo: 1000,                 // slow down steps by 1 second
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});