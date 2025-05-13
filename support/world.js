const { setWorldConstructor, Before, After } = require('@cucumber/cucumber');
const playwright = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await playwright.chromium.launch({ headless: true });
});

After(async function () {
  await this.browser.close();
});
