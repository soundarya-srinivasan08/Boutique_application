import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-casualwear',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casualwear.component.html',
  styleUrl: './casualwear.component.css'
})
export class CasualwearComponent {

  minPrice: number = 2000;
  maxPrice: number = 100000;
sizes: string[] = ['S', 'M', 'L', 'XL'];  // Example size data
colors: string[] = ['Red', 'Blue', 'Green', 'White'];  // Example color data
ageGroups: string[] = ['18-25', '26-35', '36-45'];  // Example age group data
categories: string[] = ['Bridal Wear', 'Casual Wear', 'Western Wear'];  // Example categories data



filteredProducts: any[] = [
  {
    name: 'Orange banarasi silk half n half saree',
    price: 99000,
    type:'saree',
    color: 'Orange',
    image: 'images/sleeveless.jpg'
    
  },
  {
    name: 'White Full Stitched with Layers Christian Wedding',
    price: 18000,
    color: 'White',
    image: 'images/shortkurti.jpeg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Embroidery Hand Work Red Bridal Dress',
    price: 22000,
    color: 'Red',
    image: 'images/shortchikankari.jpeg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Designer Indo Western',
    price: 25000,
    color: 'Grey-ash',
    image: 'images/Kurti.jpg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Kanjivaram Saree',
    price: 30000,
    type:'saree',
    color: 'Red-Gold',
    image: 'images/highpuffkurti.jpg'
  },
  {
    name: 'Grey Embroidy Neted Frok',
    price: 15000,
    color: 'Black-grey',
    image: 'images/Floralprinted.jpg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Anarkali Bridal Suit',
    price: 55000,
    color: 'Marron-gold',
    image: 'images/coordset.jpg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Haldi Designed Lehanga',
    price: 30000,
    color: 'Yellow',
    image: 'images/cottonkurta.jpg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'White Chiffon Lehenga With Designer Choli',
    price: 77000,
    color: 'White-multi-color',
    image: 'images/Designerkurti.jpeg',
    size: ['S', 'M', 'L', 'XL']
  },
  {
    name: 'Pakistani Velvet Bride Dress',
    price: 60000,
    color: 'Multi-color',
    image: 'images/chinkankari.jpeg',
    size: ['S', 'M', 'L', 'XL']
  }
];  // Example products data

constructor(private cartservice: CartService) {}  // Inject CartService

  // Add product to cart
  addToCart(product: any) {
    this.cartservice.addToCart(product);
    alert(`${product.name} added to cart!`);
  }




}
