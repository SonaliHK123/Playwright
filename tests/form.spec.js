
// @ts-check
import { test, expect } from '@playwright/test';


test.only ('understand context',async({page})=>{

    await page.goto("file:///F:/Downloads/automation-practice-master-main/automation-practice-master-main/app/index.html",{timeout:10000});
    await page.getByText("Form Submission").click();

    //await expect(page).toHaveTitle("Form Submission Practice1"); //hard assertion
    //console.log("I am line after assertion");

   //await expect.soft(page).toHaveTitle("Form Submission Practic2e"); //soft assertion

   //console.log("I am line after assertion");


   await page.getByLabel("Full Name *").fill("Sonali Konde");
   await page.getByLabel("Email Address *").fill("sonali.wararkar13@gmail.com");
   await page.getByLabel("Password").fill("aghghg");
   await page.getByLabel("Phone Number").fill("1234567890");
   await page.getByPlaceholder("Enter your age").hover;
   await page.getByPlaceholder("Enter your age").fill("30");
   await page.locator("[id='country]").selectOption({index:4})









    //await page.waitForTimeout(5000);



})