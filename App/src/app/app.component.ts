
import { Component } from '@angular/core';
import {SummaryPipe} from './summary.pipe';
//import { FavoriteComponent } from './favorite/favorite.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  email;
  title="App"
  //isFavorite=true;
  isActive=true;
 // post={
//isFavorite=!isFavorite,

 // }

  

  text:string=" Originally, the rewrite of AngularJS was called Angular2 by the team, but this led to confusion among developers. To clarify, the team announced that separate terms should be used for each framework with AngularJS referring to the 1.X versions and Angular without the JS referring to versions 2 ";

  onKeyUp(){
    console.log(this.email);
  }
  
}
