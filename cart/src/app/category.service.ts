import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  category=[
    {name:'Dairy',id:0},
    {name:'Breads',id:1},
    {name:'Fruits',id:2},
    {name:'Vegetables',id:3},
    {name:'Spices',id:4},
  ];
  getCategory(){
    
    return this.category;
    
  }
}
