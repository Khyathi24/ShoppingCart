import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    if (!args) {
     console.log(args);
      return value;
     
    }
    return value.filter((val) => {
      let rVal = (val.firstname.toLocaleLowerCase().includes(args)) 
            ||(val.lastname.toLocaleLowerCase().includes(args)) 
             ||(val.username.toLocaleLowerCase().includes(args)) 
            || (val.email.toLocaleLowerCase().includes(args));
           
      return rVal;
    });

  }

  }


