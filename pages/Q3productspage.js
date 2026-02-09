export class Q3productspage {
  constructor() {
    // menu
    this.menuBtn = '#react-burger-menu-btn';
    this.resetLink = '#reset_sidebar_link';
    this.logoutLink = '#logout_sidebar_link';

    // products page
    this.sortDropdown = '.product_sort_container';
    this.firstAddToCartBtn = '.inventory_item:nth-child(1) button'; 
    this.cartIcon = '.shopping_cart_link';

    // page ready / safe click area
    this.inventoryArea = '.inventory_list';
  }
}