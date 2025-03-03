import { advertismentPage } from "../pageobjects/advert.page";

describe(`5.Verify Automatic Disappearance of Advertisement`, async () => {
    it(`Open the webpage and check that the advertisement closes automatically in less than 20 seconds.`, async () => {
        await advertismentPage.open();
        await browser.switchFrame(advertismentPage.iFrame1);
        await advertismentPage.waitUntilDisplayed(advertismentPage.advertCloseBtn);
        await advertismentPage.waitUntilNotDisplayed(advertismentPage.advertCloseBtn, 20000);
        await expect(await advertismentPage.advertCloseBtn.isDisplayed()).toBe(false);
    });
});
