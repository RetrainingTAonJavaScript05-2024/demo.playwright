import {Page, Locator} from "@playwright/test"
import {HomePage} from "./homePage";

export class LoginPage{
    page:Page;
    submitButton: String;
    phoneInput: Locator

    constructor(page: Page){
        this.page = page;
        this.submitButton = "//button[@type='submit' and normalize-space(.)='confirmationString']"
        this.phoneInput = page.locator("//input[@id='phone']");
    }

    async enterPhoneNumber(phone: string){
        await this.phoneInput.fill(phone);
        return this;
    }

    async clickContinue(){
        await this.page.locator(this.submitButton.replace('confirmationString', 'Продовжити')).click();
        return this;
    }

    async clickSubmit(){
        await this.page.locator(this.submitButton.replace('confirmationString', 'Підтвердити')).click();
        return new HomePage(this.page);
    }
}