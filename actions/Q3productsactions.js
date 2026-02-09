import { Q3productspage } from '../pages/Q3productspage';

export class Q3productsactions {
  constructor(page) {
    this.page = page;
    this.productsPage = new Q3productspage(page);
  }

async resetAppState() {
  // open menu
  await this.page.click('#react-burger-menu-btn', { force: true });
  await this.page.waitForTimeout(2000);

  // click reset
  await this.page.click('#reset_sidebar_link');
  await this.page.waitForTimeout(2000);

  // 🔑 CLOSE MENU (same as Q2)
  await this.page.keyboard.press('Escape');
  await this.page.waitForTimeout(2000);
}
async resetAppStateAfterOrder() {
  await this.page.click('#react-burger-menu-btn');
  await this.page.waitForSelector('#reset_sidebar_link');
  await this.page.click('#reset_sidebar_link');
}
async filterZtoA() {
  await this.page.waitForTimeout(2000);
  await this.page.selectOption(this.productsPage.sortDropdown, 'za');
  await this.page.waitForTimeout(4000);
}

async addFirstProduct() {
  const btn = this.page.locator(this.productsPage.firstAddToCartBtn).first();
  await btn.scrollIntoViewIfNeeded();     // 👈 SEE PRODUCT
  await this.page.waitForTimeout(2000);
  await btn.click();
  await this.page.waitForTimeout(3000);   // 👈 SEE ADD TO CART
}

async goToCart() {
  await this.page.waitForTimeout(2000);
  await this.page.click('.shopping_cart_link');
  await this.page.waitForTimeout(4000); // 👈 SEE CART PAGE
}

async logout() {
  await this.page.click('#react-burger-menu-btn', { force: true });
  await this.page.waitForTimeout(3000);
  await this.page.waitForSelector('#logout_sidebar_link');
  await this.page.waitForTimeout(2000);
  await this.page.click('#logout_sidebar_link');
  await this.page.waitForTimeout(4000);
}
}