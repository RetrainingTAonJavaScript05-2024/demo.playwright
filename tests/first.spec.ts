import { test, expect } from "@playwright/test";

test("first rozetka", async ({ page }) => {
  await page.goto("https://rozetka.com.ua/ua/");

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});


test("open vacuum cleaner", async ({ page }) => {
    const element = page.getByRole('link', { name: 'Мийний бездротовий пилосос Philips Aqua Plus XC8349/' }).first();
    const cost = page.locator('[data-testid="cart-receipt-sum"]');
    const modal = page.locator('[data-test="modal-close-btn"]');
    await page.goto("https://rozetka.com.ua/ua/");
    await page.getByPlaceholder("Я шукаю").click();
    await page.getByPlaceholder("Я шукаю").fill("порохотяг",);
    await page.getByPlaceholder("Я шукаю").press("Enter");
    await element.click()
    await expect(modal).toBeHidden();
    await page.locator("rz-product-buy-btn").getByLabel("Купити").click();
    await expect(modal).toBeEditable();
    await expect(cost).toHaveText("Разом16 999₴")
    await page.locator('[data-test="modal-close-btn"]').click();
    await expect(modal).toBeHidden();
});
