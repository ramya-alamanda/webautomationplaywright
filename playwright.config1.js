// @ts-check
import { defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  expect:{
    timeout: 30 * 1000
  },
  
   reporter:'html',

   projects : [

    {
      name : 'safari',
      use: {
        browserName : 'webkit',
        baseURL:'https://www.amazon.com',
        headless:false,
        screenshot:'only-on-failure',
        video:'retain-on-failure'
      }
    },

    {
    name : 'chrome execution',
    use: {
        browserName:'chromium',
        baseURL:'https://www.amazon.com',
        headless:false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
         },

    }
 
   ]

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  

  /* Configure projects for major browsers */
 
});

