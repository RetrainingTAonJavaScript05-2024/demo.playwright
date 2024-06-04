import {Page, expect, Locator} from "@playwright/test"
import { ProductPage } from "./homePage";

export class BuyModal{
    page:Page;
    cost: Locator;
    modal: Locator;
    closeBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.cost =  page.locator('[data-testid="cart-receipt-sum"]');
        this.modal = page.locator('[data-test="modal-close-btn"]');
        this.closeBtn = page.locator('[data-test="modal-close-btn"]');
    }

    async toHaveText(text:string){
        await expect(this.cost).toHaveText(text);
        return this;
    }

    // async close(){
    //     console.log("cb" + this.closeBtn.isVisible())
    //     await this.closeBtn.click();
    //     return new ProductPage(this.page);
    // }
    async close(){
        await this.page.locator('[data-test="modal-close-btn"]').click();
        await expect(this.page.locator('[data-test="modal-close-btn"]')).toBeHidden();
    }

    async hidden(){
        try{
            await expect(this.modal).toBeHidden();
            return true
        } catch {
            return false;
        }
    }

}


    // await expect(cost).toHaveText("Разом16 999₴")
    // await page.locator('[data-test="modal-close-btn"]').click();
    // await expect(modal).toBeHidden();