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
      let rVal = (val.title.toLocaleLowerCase().includes(args)) 
             ||(val.category.toLocaleLowerCase().includes(args)); 
      return rVal;
    });

  }

  }


