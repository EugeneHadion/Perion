export default class Page {
    public open() {
        return browser.url(`https://su-p.undertone.com/125173`);
    }

    public async waitUntilDisplayed(element: ChainablePromiseElement, timeout: number = 5000) {
        await browser.waitUntil(async () => await element.isDisplayed(), {
            timeout,
            timeoutMsg: `Element ${await element.selector} is not displayed after ${timeout} ms`,
        });
    }

    public async waitUntilNotDisplayed(element: ChainablePromiseElement, timeout: number = 5000) {
        await browser.waitUntil(async () => !(await element.isDisplayed()), {
            timeout,
            timeoutMsg: `Element ${await element.selector} is not displayed after ${timeout} ms`,
        });
    }
}
