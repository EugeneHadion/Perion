import { advertismentPage } from "../pageobjects/advert.page";

let initialHandles: string[];
let newHandles: string[];

describe(`3.Verify Clicking on Another Advertisement Area`, async () => {
    it(`Open webpage and verify that element exists`, async () => {
        await advertismentPage.open();
        await browser.switchFrame(advertismentPage.iFrame1);
        await browser.switchFrame(advertismentPage.iFrame2);
        await expect(advertismentPage.advertArea).toBeExisting();
    });

    it(`Click on Advertisement Area and check that proper tab is opened`, async () => {
        initialHandles = await browser.getWindowHandles();
        await advertismentPage.advertArea.click();

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
        expect(urlTag1).toEqual("https://clicktag1/");
    });
});
