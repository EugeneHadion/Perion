import { advertismentPage } from "../pageobjects/advert.page";

let initialHandles: string[];
let newHandles: string[];

describe(`2.Verify "Order ahead" Functionality`, async () => {
    it(`Open webpage and verify that element exists`, async () => {
        await advertismentPage.open();
        await browser.switchFrame(advertismentPage.iFrame1);
        await browser.switchFrame(advertismentPage.iFrame2);
        await expect(advertismentPage.orderAheadBtn).toBeExisting();
    });

    it(`Click "Order Ahead" button and check that proper tab is opened`, async () => {
        initialHandles = await browser.getWindowHandles();
        await advertismentPage.orderAheadBtn.click();
        await browser.waitUntil(
            async () => {
                newHandles = await browser.getWindowHandles();
                return newHandles.length > initialHandles.length;
            },
            {
                timeout: 5000,
                timeoutMsg: "New tab is NOT opened",
            }
        );

        await browser.switchWindow(newHandles[1]);
        const urlTag1 = await browser.getUrl();
        expect(urlTag1).toEqual("https://clicktag2/");
    });
});
