import {test} from "../project/fixtures/fixtureLogin";
import {ProfilePage} from "../project/pages/profilePage";

test("open my orders page", async ({ homePage }) => {
    console.log("start test 'open my orders page'");
    console.log("verify user is logged in");
    await homePage.isUserLoggedIn();
    let profilePage: ProfilePage = await homePage.openMyOrders()
    console.log("verify profile page is displayed");
    profilePage.isProfilePageDisplayed();
    console.log("end test 'open my orders page'");
});