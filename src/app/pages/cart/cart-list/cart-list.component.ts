import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
    cartItem = input.required<Product>();

    cartService = inject(CartService);
}
