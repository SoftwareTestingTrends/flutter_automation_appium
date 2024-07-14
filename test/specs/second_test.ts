import allureReporter from "@wdio/allure-reporter";
import { strict as assert } from "assert";
import homeScreen from "../pageobjects/home.screen";

describe("Launch App and increment counter", () => {
  it("Click button and Type", async () => {
    allureReporter.addFeature("Increment counter by 1");
    await homeScreen.homePageTitleDisplays();
    await homeScreen.counterTextDisplays();
    await homeScreen.clickAddButton();
    const counter = await homeScreen.getCounterValue();
    assert.strictEqual(counter, "1");
  });
});
