import { Injectable, signal } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    cart = signal<Product[]>([]);


}
