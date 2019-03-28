import { Component} from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";



import {CategoryService} from '../../category.service';
import {ProductService} from '../../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent  {
cate:any[];
prod;
  constructor(private catser:CategoryService,private prodser:ProductService, private router:Router) { 
    this.cate=this.catser.getCategory();
   
  
  }

 
save(f:NgForm){
this.prodser.products=this.prodser.addprod(f.value);
this.router.navigate(['admin/products']);
}
}
