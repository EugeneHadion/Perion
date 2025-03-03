import { $ } from "@wdio/globals";
import Page from "./page.js";

class AdvertismentPage extends Page {
    public get iFrame1() {
        return $("#viewport");
    }
    public get iFrame2() {
        return $("#frame_125173_0_0");
    }

    public get orderAheadBtn() {
        return $("#cta_clickedL");
    }

    public get advertArea() {
        return $("#bg_clickedL");
    }

    public get advertCloseBtn() {
        return $("#close_125173_0_0");
    }
}

export const advertismentPage = new AdvertismentPage();
