import { HomePage, ProductPage} from "../pages/homePage";
import {test as base} from "./fixtureBase";
import { expect } from "@playwright/test";


type Pages = {
    homePage: HomePage; 
    productPage: ProductPage;
}


export const test = base.extend<Pages>({
    homePage: async ({page}, use) => {
        await page.goto("https://rozetka.com.ua/ua/");
        const homePage = new HomePage(page);
        use(homePage);
    },
    productPage: async ({page}, use) => {

        const element = page.getByRole('link', { name: 'Мийний бездротовий пилосос Philips Aqua Plus XC8349/' }).first();
        await page.goto("https://rozetka.com.ua/ua/");
        const modal = page.locator('[data-test="modal-close-btn"]');
        await page.getByPlaceholder("Я шукаю").click();
        await page.getByPlaceholder("Я шукаю").fill("порохотяг",);
        await page.getByPlaceholder("Я шукаю").press("Enter");
        await element.click()
        await expect(modal).toBeHidden();
        const productPage = new ProductPage(page);
        use(productPage);
    }
})