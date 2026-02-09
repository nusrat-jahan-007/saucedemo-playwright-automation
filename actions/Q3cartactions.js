import { expect } from '@playwright/test';

export class Q3cartactions {
  constructor(page) {
    this.page = page;
  }

  async verifyProductInCart() {
    await expect(
    this.page.locator('.inventory_item_name')).toBeVisible();

  }

  async checkout() {
    await this.page.waitForTimeout(3000);
    await this.page.click('#checkout');
    await this.page.waitForTimeout(4000);
    await this.page.waitForURL('**/checkout-step-one.html');
  }
}