import { Q2cartpage } from '../pages/Q2cartpage';

export class Q2cartactions {       // <-- MUST have export
  constructor(page) {
    this.page = page;
    this.cartPage = new Q2cartpage(page);
  }

  async getItemCount() {
    await this.page.waitForTimeout(2000);
    return await this.page.locator(this.cartPage.cartItems).count();
  }

async checkout() {
  const checkoutBtn = this.page.locator(this.cartPage.checkoutBtn);

  await checkoutBtn.scrollIntoViewIfNeeded();
  await this.page.waitForTimeout(2000);
  await checkoutBtn.click();
  await this.page.waitForTimeout(1000);
}
}
