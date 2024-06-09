import {Page, expect, Locator} from "@playwright/test"

export class ProfilePage{
    page:Page;
    header: Locator
    constructor(page: Page){
        this.page = page;
        this.header = page.locator("//*[@class='cabinet__heading']")
    }

    async isProfilePageDisplayed(){
        await expect(this.header).toHaveText("Мої замовлення");
    }
}