import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { SoldPercentPipe } from '../../pipes/sold-precent/sold-percent.pipe';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SoldPercentPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(public apiService: ApiService, private cartService: CartService) { }

  handleAddProduct(product: Product) {
    const cartArr = this.cartService.cart();
    cartArr.push(product);
    this.cartService.cart.set(cartArr);
  }

}
