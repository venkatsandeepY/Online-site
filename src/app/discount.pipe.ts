import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let res=0;
     res=value*(30/100);
    var updatedPrice= value-res
    return updatedPrice;
  }

}
