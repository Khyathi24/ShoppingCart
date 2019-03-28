import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(){
  
  };
  users = [
    { firstname: "Aarya", lastname: "stark", username: "aaryastark", password: "aarya",email:"aarya@valuelabs.com",mobile:"8989898989",gender:"female",country:"USA",id:'0' },
    { firstname: "sansa", lastname: "stark", username: "sansastark", password: "sansa" ,email:"sansa@valuelabs.com",mobile:"7878787878",gender:"female",country:"USA",id:'1'},
    { firstname: "dAny", lastname: "targeryen", username: "danytar", password: "dany" ,email:"dany@valuelabs.com",mobile:"9898989898",gender:"female",country:"USA",id:'2'},
    { firstname: "rob", lastname: "stark", username: "robstark", password: "rob",email:"rob@valuelabs.com",mobile:"8456879485",gender:"male",country:"USA",id:'3' },
    { firstname: "jon", lastname: "snow", username: "jonsnow", password: "jon" ,email:"jon@valuelabs.com",mobile:"7897896789",gender:"male",country:"USA",id:'4'},
    { firstname: "cersei", lastname: "lannister", username: "cersei", password: "cersei",email:"cersei@valuelabs.com",mobile:"87978898989",gender:"female" ,country:"USA",id:'5'},
  ];
  adduser(user) {
   
    this.users.push(user);
    return this.users;
    };
    getusers() {
      return this.users;
    };
  }
  


