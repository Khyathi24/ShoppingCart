import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
items;
show=true;
  constructor(private prodser:ProductService) {
    this.items=this.prodser.cart;
    if(this.items.length!=0){
      this.show=true;
    }
    else{
      this.show=false;
    }
   }

  ngOnInit() {
  }

}
