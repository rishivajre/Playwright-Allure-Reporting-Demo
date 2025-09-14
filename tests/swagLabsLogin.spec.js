import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Login Test - Sauce Labs Demo', async ({ page }) => {
  await allure.owner('Rishi Vajre QA Engineer');
  await allure.severity('critical');
  await allure.tag('authentication', 'smoke');

  await allure.step('Navigate to Sauce Labs login page', async () => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL(/.*saucedemo\.com/);
  });

  await allure.step('Enter valid credentials', async () => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
  });

  await allure.step('Click login button', async () => {
    await page.locator('[data-test="login-button"]').click();
  });

  await allure.step('Validate successful login by checking page title', async () => {
    await expect(page).toHaveURL(/.*inventory\.html/);
    const title = await page.title();
    expect(title).toContain('Swag Labs');
    await allure.attachment('Page Title', title, 'text/plain');
  });
});
