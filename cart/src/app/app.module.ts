import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductsComponent } from './products/products.component';

import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import {ProductService} from './product.service';
import { SearchPipe } from './search.pipe';
import { ProductEditComponent } from './product-edit/product-edit.component';


const AppRoutes: any = [
  
  { path: '', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  {path:'check-out',component:CheckOutComponent},
  {path:'admin/products/new',component:ProductFormComponent},
  {path:'admin/products/:id',component:ProductEditComponent},
  { path: "admin/products", component: AdminProductsComponent },
  { path: "login", component: LoginComponent },
  {path:'**',component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    ProductsComponent,
  
    LoginComponent,
    AboutusComponent,
    ProductFormComponent,
    SearchPipe,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,CustomFormsModule,
    //AppRoutingModule,
    RouterModule,RouterModule.forRoot(AppRoutes)
  ],
  providers: [CategoryService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
