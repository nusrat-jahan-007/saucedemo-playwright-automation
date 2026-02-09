import { Q2checkoutpage } from '../pages/Q2checkoutpage';

export class Q2checkoutactions {
  constructor(page) {
    this.page = page;
    this.checkoutPage = new Q2checkoutpage(page);
    
  }

  async fillCheckoutInfo() {
    await this.page.fill(this.checkoutPage.firstName, 'Nusrat');
    await this.page.waitForTimeout(2000);
    await this.page.fill(this.checkoutPage.lastName, 'Jahan');
    await this.page.waitForTimeout(2000);
    await this.page.fill(this.checkoutPage.postalCode, '1203');
    await this.page.waitForTimeout(2000);
    await this.page.click(this.checkoutPage.continueBtn);
    await this.page.waitForTimeout(2000);
  }

async finishOrder() {
    // Scroll the Finish button into view first
    const finishBtn = this.page.locator(this.checkoutPage.finishBtn);
    await finishBtn.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(2000);

    // Click the Finish button
    await finishBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async getSuccessMessage() {
    await this.page.waitForTimeout(2000);
    return await this.page.textContent(this.checkoutPage.successMsg);
  }
}