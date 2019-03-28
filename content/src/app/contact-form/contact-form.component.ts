import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators, FormsModule} from '@angular/forms'

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
 
  form=new FormGroup({
username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
password:new FormControl('',Validators.required),
email:new FormControl('',Validators.email),
  });
  constructor() { }

  
  
  submit(){
    
    alert("logged successfully");

  }

}

