import { Q2loginpage } from '../pages/Q2loginpage';

export class Q2loginactions {
  constructor(page) {
    this.page = page;
    this.loginPage = new Q2loginpage(page);
  }

  async login(username, password) {
    await this.page.fill(this.loginPage.username, username);
    await this.page.waitForTimeout(1000);
    await this.page.fill(this.loginPage.password, password);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.loginPage.loginButton);
    await this.page.waitForTimeout(1000);
  }
}