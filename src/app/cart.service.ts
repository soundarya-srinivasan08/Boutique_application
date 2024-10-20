import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  // Get cart items
  getItems() {
    return this.cartItems;
  }

  // Add item to cart
  addToCart(item: any) {
    this.cartItems.push(item);
  }

  // Remove item from cart
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Get total price
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  // Clear cart after checkout
  clearCart() {
    this.cartItems = [];
  }
}
