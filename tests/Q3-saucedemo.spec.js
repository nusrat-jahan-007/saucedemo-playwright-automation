import { test } from '@playwright/test';
import { Q3loginactions } from '../actions/Q3loginactions';
import { Q3productsactions } from '../actions/Q3productsactions';
import { Q3cartactions } from '../actions/Q3cartactions';
import { Q3checkoutactions } from '../actions/Q3checkoutactions';


test.setTimeout(90000);
test('Q3 - performance glitch user flow', async ({ page }) => {
  const login = new Q3loginactions(page);
  const products = new Q3productsactions(page);
  const cart = new Q3cartactions(page);
  const checkout = new Q3checkoutactions(page);

  await login.login('performance_glitch_user', 'secret_sauce');

  await products.resetAppState();
  await products.filterZtoA();
  await products.addFirstProduct();
  await products.goToCart();

  await cart.verifyProductInCart();
  await cart.checkout();

  await checkout.fillDetails('Nusrat', 'Jahan', '1203');
  await checkout.verifyOverviewAndFinish();

  await products.resetAppStateAfterOrder();
  await products.logout();
});