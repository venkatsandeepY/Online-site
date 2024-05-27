import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
  providers:[OnlineserviceService]
})
export class BuyComponent {
  res: string = " ";
  constructor( public ob: OnlineserviceService) {
    this.res = ob.add(3, 2);
    this.res = ob.multiply(3, 2)
  }

  hi(){
    this.ob.add(10,30);
  }
}
