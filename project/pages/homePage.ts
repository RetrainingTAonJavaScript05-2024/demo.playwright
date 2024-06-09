import {Page, expect, Locator} from "@playwright/test"
import { BuyModal } from "./buyModal";
import {ProfilePage} from "./profilePage";
import {LoginPage} from "./loginPage";

export class HomePage{
    page:Page;
    ordersIcon:Locator;
    userIcon:Locator

    constructor(page: Page){
        this.page = page;
        this.ordersIcon = page.locator("//rz-user/a");
        this.userIcon = page.locator("//*[contains(@href,'icon-user')]");
    }

    async isUserLoggedIn(){
        await expect(this.ordersIcon).toBeVisible();
    }

    async openMyOrders(){
        await this.ordersIcon.click()
        return new ProfilePage(this.page);
    }

    async openLoginPage(){
        await this.userIcon.click()
        return new LoginPage(this.page);
    }
}

export class ProductPage{
    page:Page;
    constructor(page: Page){
        this.page = page;

    }

    async clickBuy(){
        await this.page.locator("rz-product-buy-btn").getByLabel("Купити").click();
        const modal = this.page.locator('[data-test="modal-close-btn"]');
        await expect(modal).toBeEditable();
        return new BuyModal(this.page);
    }
}