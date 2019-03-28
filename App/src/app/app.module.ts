
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from "./courses/courses.component";
import {CourseService} from './course.service';
//import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe} from './summary.pipe';
import { PanelComponent } from './panel/panel.component';




@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    //FavoriteComponent, 
    PanelComponent
    
  ],
  imports: [
    BrowserModule,FormsModule
   
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
