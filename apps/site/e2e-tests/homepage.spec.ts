import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { HomePage } from "./models/homepage";

test.describe('homepage', () => {
  let homePage;
  
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateTo(`/`);
  });
  
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('should contain a skip link as the first focusable item', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluateHandle(() => document.activeElement);
    
    const className = await focusedElement.evaluate((el) =>
      el.classList.contains('usa-skipnav')
    );
    
    expect(className).toBeTruthy();
  });
  
});
