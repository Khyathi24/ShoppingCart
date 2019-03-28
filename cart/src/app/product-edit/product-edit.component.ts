import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import {CategoryService} from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent   {
cate;

    constructor(private prodser:ProductService,private catser:CategoryService,private route:Router) {
      this.cate=this.catser.getCategory();
     }
     pro=this.prodser.produ;
    i=this.pro.id;
    
    save(p){
    // console.log(p.value.title);
      this.prodser.products[this.i].title=p.value.title;
      this.prodser.products[this.i].price=p.value.price;
      this.prodser.products[this.i].category=p.value.category;
      this.prodser.products[this.i].imageUrl=p.value.imageUrl;
    // console.log(this.prodser.products[this.i]);
     this.route.navigate(['/admin/products']);
    }

}