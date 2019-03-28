import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
cartitems;
  constructor(private prodser:ProductService,private route:Router) {  
    this.cartitems=this.prodser.cart;
  }
goBack(){
  this.route.navigate(['/']);
}
proceed(){
  this.route.navigate(['/my/orders']);
}
  ngOnInit() {
  }

}
