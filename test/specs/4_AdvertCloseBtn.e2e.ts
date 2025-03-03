import { advertismentPage } from "../pageobjects/advert.page";

describe(`4.Verify Advertisement Close Button`, async () => {
    it(`Open webpage and verify that element exists`, async () => {
        await advertismentPage.open();
        await browser.switchFrame(advertismentPage.iFrame1);
        await advertismentPage.waitUntilDisplayed(advertismentPage.advertCloseBtn);
        await expect(await advertismentPage.advertCloseBtn.isDisplayed()).toBe(true);
    });

    it(`Click "Close" button and check that advert is closed`, async () => {
        await advertismentPage.advertCloseBtn.click();
        await advertismentPage.waitUntilNotDisplayed(advertismentPage.advertCloseBtn);
        await expect(await advertismentPage.advertCloseBtn.isDisplayed()).toBe(false);
    });
});
