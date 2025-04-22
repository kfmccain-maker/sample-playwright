import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I navigate to the Google homepage', async function () {
  await this.page.goto('https://www.google.com');
});

When('I type {string} into the search input field', async function (query: string) {
  const searchInput = this.page.locator('input[name="q"]');
  await searchInput.fill(query);
});

When('I press Enter to perform the search', async function () {
  const searchInput = this.page.locator('input[name="q"]');
  await searchInput.press('Enter');
});

Then('the page title should contain {string}', async function (query: string) {
  await expect(this.page).toHaveTitle(new RegExp(query, 'i'));
});

Then('search results should be displayed', async function () {
  const results = this.page.locator('#search .g');
  const resultCount = await results.count();
  expect(resultCount).toBeGreaterThan(0);
});

Then('the first search result should contain the text {string}', async function (text: string) {
  const firstResult = this.page.locator('#search .g').first();
  await expect(firstResult).toContainText(text);
});

Then('I take a screenshot of the search results page', async function () {
  await this.page.screenshot({ path: 'google-search-results.png' });
});