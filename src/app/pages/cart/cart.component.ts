import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartListComponent } from './cart-list/cart-list.component';

@Component({
  selector: 'app-cart',
  imports: [CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);


}
