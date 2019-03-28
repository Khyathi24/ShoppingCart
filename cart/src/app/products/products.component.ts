import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/pro';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[];
  p: Product[];
  filteredProducts: Product[];
  categories;
  showActions: boolean = true;
  category: string;
  constructor(private prodser: ProductService,
    private catser: CategoryService,
    private route: ActivatedRoute,
    private router: Router) {
    this.products = prodser.getproduct();
    this.categories = catser.getCategory();
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        (this.products.filter(p => p.category === this.category)) :
        this.products;
    });
  }

  show(p: Product) {
    if (p.quantity != 0) {
      return true;
    }
    else {
      return false;
    }
  }
  getQuantity(p) {
    return this.products[this.products.indexOf(p)].quantity;
  }

  addToCart(p: Product) {
    if (p.quantity != 0 && p.visited==true) {
      this.products[p.id].quantity = this.products[p.id].quantity + 1;
    }
    if (p.quantity == 0 && p.visited==true) {
      this.products[p.id].quantity = 1;
    }
    if (p.quantity == 0 && p.visited==false) {
      this.prodser.cart.push(p);
      this.products[p.id].quantity = 1;
      p.visited=true;
    }
    }
  

  removeFromCart(p: Product) {

    if (p.quantity == 0) {
      this.prodser.remove(p);
      return this.prodser.cart;
    
    }
    else {
      return p.quantity--;
      }
  }
}