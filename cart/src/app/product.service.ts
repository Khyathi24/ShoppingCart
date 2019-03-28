import { Injectable } from '@angular/core';
import {Product} from './models/pro';


@Injectable({
  providedIn: 'root'
})

export class ProductService  {

  constructor() { }
  products:Product[]=[
  {title:"Milk-Bread",price:0.1,category:"Breads",imageUrl:"https://www.tasteofhome.com/wp-content/uploads/2018/01/exps32480_MRR153791D09_18_6b-2.jpg",quantity:0,id:0,visited:false},
  {title:"Onions",price:1,category:"Vegetables",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoxG6U90WQwUEF34Y2e29jYwaKqKMqqEMGg1FcQcs1iXKJ_ftIA",quantity:0,id:1,visited:false},
  {title:"Tomato",price:0.8,category:"Vegetables",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOiP3u0y9MPxqNdevD1qhkL9cvqlT1GPQ_uM63DpNI7JT1oBv",quantity:0,id:2,visited:false},
  {title:"Lavash bread",price:2.5,category:"Breads",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPIzj9dMfmUIplhERqgR7QjUvw7dT9ipsy-q4WvSVsN6g6VGx",quantity:0,id:3,visited:false},
  {title:"Cabbage",price:2,category:"Vegetables",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpY-BoInAGLmLmyScj-ejhThP4oAmF19hHuCbQtz_K3j0Ofl7zQ",quantity:0,id:4,visited:false},
  {title:"Curd ",price:1.5,category:"Dairy",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4G1XxUFRx_LVgN3eIEMBvs7A46ZhWSE_1JIYdY_M-Z2yp_pgPxw",quantity:0,id:5,visited:false},
  {title:"Ghee ",price:1.8,category:"Dairy",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLuyU5T7tPA5jpNZ5YmadSK6vJ35H1uwvVH3vPOeia_HTIdpizw",quantity:0,id:6,visited:false},
  {title:"Cumin ",price:0.2,category:"Spices",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5oe05lCh6WGUmnlflqAlXCYj20I7NA4IAo4zGl_RB1QxPTj_6g",quantity:0,id:7,visited:false},
  {title:"Cardamom ",price:0.1,category:"Spices",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_A-TT9FvYWOViacD2G9qruTnrqDik7vtANjcncF0ghAH_vB-vQ",quantity:0,id:8,visited:false},
  {title:"Mango ",price:2,category:"Fruits",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Bey2oK3LjcPwtXdh8yQrvqap6g1ALvcNtwnoN1PfBPrYhSjG",quantity:0,id:9,visited:false},
  {title:"apple ",price:1.8,category:"Fruits",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS95UW3g_m273sv26pmGUzpyhNlMJ-5U3w0niuNeLq_x4QsCgh",quantity:0,id:10,visited:false},
  {title:"Grapes ",price:1.5,category:"Fruits",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3JMpnPK4FX1GMGWHbDsbgd-ZrnESANSfQFNbMkzdJkRS7UX_1Q",quantity:0,id:11,visited:false},
 
  ];
  cart:Product[]=[

  ];
  getCart(){
    return this.cart;
  }
  getproduct(){
    return this.products;
  }
  addprod(x){
    this.products.push(x);
    return this.products;
  }
  remove(p){
    
    const index: number = this.cart.indexOf(p);
    if(index!=-1){
      this.cart.splice(index,1);
    }
    return this.cart;
  }
 total=0;
    getQuantity(){
      for(var i=0;i<this.cart.length;i++){
        this.total=this.total+this.cart[i].quantity;
      }
      console.log(this.total);
    }
produ;
    get(prod){
      this.produ=prod;
    }
}
