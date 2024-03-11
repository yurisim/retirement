import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  const buttonText = await page.textContent('button');
  expect(buttonText).toBe(' CMSgt Tracy L. Massey ');
});
