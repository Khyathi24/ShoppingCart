import { Component } from '@angular/core';
import { ProductService} from '../../product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent   {
products;
  constructor(private prodser:ProductService,private route:Router) {
   this.products=prodser.getproduct();
   }
  
  edit(prod)
  {
   this.route.navigate(['/admin/products/',prod.id]);
   this.prodser.get(prod);
   
  }
  delete(prod){
    const index: number = this.products.indexOf(prod);
        if (index !== -1) {
           var r= confirm( "click ok to delete " + this.products[index].title  + " details ");
           if(r)
            this.products.splice(index, 1);
          
        }
   

  }
  

  
}
