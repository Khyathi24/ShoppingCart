import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private prodser: ProductService) {

  }

  cart = this.prodser.cart;
  quantity() {
    let total = 0;
    for (var i = 0; i < this.cart.length; i++) {

      console.log(this.cart[i].title);
      total = total + this.cart[i].quantity;
    }
    return total;
  }
  ngOnInit() {
  }

}
