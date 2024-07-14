import { byValueKey } from "appium-flutter-finder";
import { strict as assert } from "assert";

class HomeScreen {
 async homePageTitleDisplays() {
  assert.strictEqual(
    await driver.getElementText(byValueKey("AppBarTitle")),
    "Flutter Demo Home Page"
  );
 }
  
  async counterTextDisplays() {
    assert.strictEqual(
      await driver.getElementText(byValueKey("CounterText")),
      "You have pushed the button this many times:"
    );
  }

  async clickAddButton() {
    const button = byValueKey("IncrementButton");
    await driver.elementClick(button);
  }

  async getCounterValue() {
    const counter = await driver.getElementText(byValueKey("CounterValue"));
    return counter;
  }
}

export default new HomeScreen();
