import { expect } from '@playwright/test';

export class Q3checkoutactions {
  constructor(page) {
    this.page = page;
  }

  async fillDetails(first, last, zip) {
    await this.page.waitForTimeout(1000);
    await this.page.fill('#first-name', first);
    await this.page.waitForTimeout(1000);
    await this.page.fill('#last-name', last);
    await this.page.waitForTimeout(1000);
    await this.page.fill('#postal-code', zip);
    await this.page.waitForTimeout(1000);
    // SCROLL before Continue
  await this.page.mouse.wheel(0, 500);
  await this.page.waitForTimeout(3000);
    await this.page.click('#continue');
    await this.page.waitForTimeout(2000);

    await this.page.waitForURL('**/checkout-step-two.html');
  }

  async verifyOverviewAndFinish() {
    await expect(
      this.page.locator('.inventory_item_name')).toBeVisible();

    await expect(
      this.page.locator('.summary_subtotal_label')).toContainText('$');
    await this.page.waitForTimeout(3000);
    // SCROLL before Finish
  await this.page.mouse.wheel(0, 500);
  await this.page.waitForTimeout(3000);
    await this.page.click('#finish');
    await this.page.waitForTimeout(5000);

    await expect(
      this.page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');
  }
}