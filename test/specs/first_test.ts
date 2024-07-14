import allureReporter from "@wdio/allure-reporter";
import homeScreen from "../pageobjects/home.screen";

describe("Launch App and verify home page content", () => {
  it("Verify page content", async () => {
    allureReporter.addFeature("Verify page content");
    await homeScreen.homePageTitleDisplays();
    await homeScreen.counterTextDisplays();
  });
});

    
    