import { Component } from '@angular/core';
import { ProductService} from '../product.service';
import {Product} from '../models/pro';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent   {
cartitems:Product[];
show=true;
total:number=0;
  constructor(private prodser:ProductService,private router:Router) { 
    this.cartitems=this.prodser.cart;
    if(this.cartitems.length!=0){
      this.show=true;
    }
    else{
      this.show=false;
    }
    for(var i=0;i<this.cartitems.length;i++){
 
      this.total=this.total+this.cartitems[i].price*this.cartitems[i].quantity;
    }
 
  }
      crct(c){
        if(c.quantity!=0){
          return true;
        }
        else return false;
      }
proceed(){
  
  this.router.navigate(['/check-out']);
}
show1(p){
  if(p.quantity!=0){
    return true;
  }
  else return false;
}
  }

  
