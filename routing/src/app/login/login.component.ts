import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:string;

  constructor(private router:Router,private authser:UserService) { }

  log(x){
    console.log(x);
  }
 login(username ,password){
   for(var i=0;i< this.authser.users.length;i++){
   if(this.authser.users[i].username==username && this.authser.users[i].password==password)
   {
   alert("Loggedin successfully");
   this.router.navigate(['home']);
   break;
 }
else{
   this.router.navigate(['login']);
 }
}
}



register(){
  this.router.navigate(['register']);
}
}
