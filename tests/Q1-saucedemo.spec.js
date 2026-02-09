import { test, expect } from '@playwright/test';
import Q1actions from '../actions/Q1actions.js';

test('Verify locked out user error message', async ({ page }) => {

    const login = new Q1actions(page);

    await page.goto('https://www.saucedemo.com/');

    await login.login('locked_out_user', 'secret_sauce');

    const error = await login.getErrorMessage();

    await expect(error).toContain('locked out');

});