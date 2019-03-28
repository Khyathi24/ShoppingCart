import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public like:number,public isSelected:boolean){}

  Onclick(){
   
    this.like+=(this.isSelected)? -1:1;
    this.isSelected=!this.isSelected;
  }
}
