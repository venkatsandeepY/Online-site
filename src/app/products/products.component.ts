import { Component } from '@angular/core';
import { OnlineserviceService, IPrd } from '../onlineservice.service';
import { DiscountPipe } from '../discount.pipe';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [OnlineserviceService]
})
export class ProductsComponent {
  prod: IPrd[] = [];
  constructor(prd: OnlineserviceService) {
    //this.prod = prd.prod;
    prd.showproduct().subscribe(result => this.prod=result)
    
  }
  value: Boolean = true;
  showOrHide() {
    this.value = !this.value
  }
}