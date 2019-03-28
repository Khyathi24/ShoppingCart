import { Component } from '@angular/core';
import { Location, LowerCasePipe } from "@angular/common";
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: []
})
export class HomeComponent {
    users: any;
 
 n:any;

   editData: boolean[] = [false, false, false, false, false, false, false, false];

    constructor(private authser: UserService, private router: Router) {
        this.users = authser.getusers();
      
}

    delete(user) {
        const index: number = this.users.indexOf(user);
        if (index !== -1) {
           var r= confirm( "click ok to delete " + this.users[index].username  + " details ");
           if(r)
            this.users.splice(index, 1);
          
        }
    }

    goBack() {
        this.router.navigate(['login']);
    }
    i: any;
    us: any[];
    getList() {
        this.us = this.authser.users;
        return this.us;
    }

    modify(x) {
        this.editData[x.id] = true;
    }

    update(f) {
        this.editData[f.id] = false;
        console.log(f);
    }
}