const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

setDefaultTimeout(60*1000);

Given('I open Google homepage', async function () {
  this.page = await this.browser.newPage();
  await this.page.goto('https://www.google.com');
  const agree = await this.page.$('button:has-text("I agree")');
  if (agree) await agree.click(); // handle cookie popup
});

// When('I search for {string}', async function (searchQuery) {
//   await this.page.fill('[name="q"]', searchQuery);
//   await this.page.keyboard.press('Enter');
//   await this.page.waitForSelector('#search');
// });

When('I search for {string}', async function (searchQuery) {
    await this.page.fill('[name="q"]', searchQuery);
    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector('h3'); // wait for search result titles
  });

Then('I should see {string} in results', async function (expectedText) {
    await this.page.waitForSelector('body');
    const content = await this.page.content();
    expect(content).toContain(expectedText);
    await this.page.close();
});
