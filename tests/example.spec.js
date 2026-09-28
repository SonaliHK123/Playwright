// @ts-check
import { test, expect } from '@playwright/test';

test ('understand context',async({browser})=>{
  const context1=await browser.newContext();
  const page1=await context1.newPage();
  const page2=await context1.newPage();
  await page1.goto("https://www.google.com")
  await page2.goto("https://www.amazon.com")
  const context2=await browser.newContext();
  const page3=await context2.newPage();
  const page4=await context2.newPage();
  await page3.goto("https://www.facebook.com")
  await page4.goto("https://www.techelliptica.com")




});




// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });




