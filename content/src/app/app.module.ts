import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
//import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    PostsComponent
   // FavoriteComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent
    ,ContactFormComponent
  ]
})
export class AppModule { }