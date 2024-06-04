import {test as base} from '@playwright/test';


export const test = base.extend({
    page: async ({page}, use) => {
        console.log("start update fixture page");
        await page.setViewportSize({width: 1920, height:1080});
        
        // additional logic
        console.log("start use");
        use(page);
        // this cloud be your cleanup
        console.log("end use");


    }


})