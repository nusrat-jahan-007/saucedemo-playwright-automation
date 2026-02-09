import { test, expect } from '@playwright/test';
import { Q2loginactions } from '../actions/Q2loginactions';
import { Q2productsactions } from '../actions/Q2productsactions';
import { Q2cartactions } from '../actions/Q2cartactions';
import { Q2checkoutactions } from '../actions/Q2checkoutactions';

test('Q2 - full purchase flow using POM', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  const login = new Q2loginactions(page);
  const products = new Q2productsactions(page);
  const cart = new Q2cartactions(page);
  const checkout = new Q2checkoutactions(page);

  await login.login('standard_user', 'secret_sauce');
  await products.resetAppStateAfterOrder();
  await products.addThreeProducts();
  await products.goToCart();

  const count = await cart.getItemCount();
  expect(count).toBe(3);

  await cart.checkout();
  await checkout.fillCheckoutInfo();
  await checkout.finishOrder();

  const message = await checkout.getSuccessMessage();
  expect(message).toContain('Thank you for your order!');

  await products.resetAppStateAfterOrder();
  await products.logout();
})