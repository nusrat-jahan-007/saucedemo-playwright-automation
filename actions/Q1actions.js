import Q1page from '../pages/Q1page.js';

class Q1actions {

    constructor(page) {
        this.page = page;
        this.q1page = new Q1page(page);
    }

    async login(username, password) {
        await this.page.fill(this.q1page.usernameInput, username);
        await this.page.waitForTimeout(5000);
        await this.page.fill(this.q1page.passwordInput, password);
         await this.page.waitForTimeout(5000);
        await this.page.click(this.q1page.loginButton);
         await this.page.waitForTimeout(5000);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.q1page.errorMessage);
    }

}

export default Q1actions;