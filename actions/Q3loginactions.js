import { Q3loginpage } from '../pages/Q3loginpage';

export class Q3loginactions {
  constructor(page) {
    this.page = page;
    this.loginPage = new Q3loginpage(); // 
  }

  async login(username, password) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForTimeout(1000);

    await this.page.fill(this.loginPage.username, username);
    await this.page.waitForTimeout(1000);

    await this.page.fill(this.loginPage.password, password);
    await this.page.waitForTimeout(1000);

    await this.page.click(this.loginPage.loginBtn);
    await this.page.waitForTimeout(1000);
  }
}