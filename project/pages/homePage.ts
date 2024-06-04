import {Page, expect} from "@playwright/test"
import { BuyModal } from "./buyModal";

export class HomePage{
    page:Page;

    constructor(page: Page){
        this.page = page;
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