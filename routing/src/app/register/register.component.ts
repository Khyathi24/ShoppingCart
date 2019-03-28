import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[]
})
export class RegisterComponent {


  constructor(private authser:UserService,private router: Router) { }
 
submit(form:NgForm) {

 this.authser.users= this.authser.adduser(form.value);
 
 this.router.navigate(['home']);
 return this.authser.users;
  
}
}
