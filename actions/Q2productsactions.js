import { Q2productspage } from '../pages/Q2productspage';

export class Q2productsactions {
  constructor(page) {
    this.page = page;
    this.productsPage = new Q2productspage(page);
  }

async resetAppStateAfterOrder() {
  // Open menu
  await this.page.click(this.productsPage.menuBtn);
  await this.page.waitForTimeout(1000);

  // Reset app state
  await this.page.click(this.productsPage.resetLink);
  await this.page.waitForTimeout(1000);

  // Close menu using X button (IMPORTANT)
  await this.page.click(this.productsPage.menuCloseBtn);
  await this.page.waitForTimeout(1000);
}

async addThreeProducts() {
  // Add 1st product
  await this.page.click(this.productsPage.backpack);
  await this.page.waitForTimeout(1000);

  // Add 2nd product
  await this.page.click(this.productsPage.bikeLight);
  await this.page.waitForTimeout(1000);

  // SCROLL manually before 3rd product
  await this.page.evaluate(() => {
    window.scrollBy({ top: 50, behavior: 'smooth' });  // scrolls 300px down smoothly
  });
  await this.page.waitForTimeout(1000); // wait so user can see scroll

  // Add 3rd product
  await this.page.click(this.productsPage.boltTshirt);
  await this.page.waitForTimeout(1000);
}

  async goToCart() {
    await this.page.click(this.productsPage.cartIcon);
    await this.page.waitForTimeout(2000);
  }

async logout() {
  // 1. Open hamburger menu
  await this.page.click(this.productsPage.menuBtn);

  // 2. Wait until logout link is visible & ready
  const logoutLink = this.page.locator(this.productsPage.logoutLink);
  await logoutLink.waitFor({ state: 'visible' }); // <-- key fix

  // 3. Click logout
  await logoutLink.click();
}}
  