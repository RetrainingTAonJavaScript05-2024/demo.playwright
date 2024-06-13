import { HomePage } from "../pages/homePage";
import {test as base} from "./fixtureBase";
import {LoginPage} from "../pages/loginPage";


type Pages = {
    homePage: HomePage; 
    loginPage: LoginPage;
}


export const test = base.extend<Pages>({
    homePage: async ({page}, use) => {
        await page.goto("https://rozetka.com.ua/ua/", { timeout: 60000 });
        const homePage = new HomePage(page);
        await homePage.openLoginPage();
        use(homePage);
    },
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterPhoneNumber("0123456789");
        await loginPage.clickContinue();
        // enter code manually
        await page.waitForTimeout(60000)
        await loginPage.clickSubmit();
        const homePage = new HomePage(page);
        use(loginPage);
    }
})