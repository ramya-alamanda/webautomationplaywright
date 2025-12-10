// @ts-check
import { defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries :1,
  expect:{
    timeout: 30 * 1000
  },
  
   reporter:'html',
e
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName:'chromium',
    baseURL:'https://www.amazon.com',
    headless:false,
    screenshot:'only-on-failure',
    video:'retain-on-failure',
  },

  /* Configure projects for major browsers */
 
});

