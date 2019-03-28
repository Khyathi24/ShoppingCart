import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  OnClick(){
    this.isFavorite=!this.isFavorite;
  }
}