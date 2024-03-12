import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { SoldPercentPipe } from '../../pipes/sold-precent/sold-percent.pipe';
import { Product } from '../../types/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, SoldPercentPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  total: number = 0;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.calculateTotal();
  }

  
  handleRemoveProduct(product: Product) {
    console.log(product);

    const cartArr = this.cartService.cart();
    const productIndex = cartArr.findIndex(a => a.id === product.id);
    cartArr.splice(productIndex, 1);

    this.cartService.cart.set(cartArr);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.cart().reduce((a, b) => a + b.price, 0);
  }
  

}
