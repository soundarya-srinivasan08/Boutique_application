import { Component } from '@angular/core';
import { CartService } from '../../cart.service'; // Import CartService

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone:true
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

  // Remove item from cart
  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }

  // Calculate total price of items in cart
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  // Checkout function
  checkout(): void {
    alert('Checkout successful!');
    this.cartService.clearCart();
    this.cartItems = this.cartService.getItems();  // Update the cart
  }
}
