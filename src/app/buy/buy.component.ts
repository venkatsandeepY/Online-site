import { Component } from '@angular/core';
import { OnlineserviceService } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css',
  providers:[OnlineserviceService]
})
export class BuyComponent {
  res: string = " ";
  pid : any ;pname:any;pimage:any;price:any;
  hello:string=""
  qty:number=1;
  
  //we can read query string from the current url by using ActivatedRoute
  constructor( public ob: OnlineserviceService,public r:ActivatedRoute) {
    this.res = ob.add(3, 2);
    this.res = ob.multiply(3, 2);
   // r.queryParamMap.subscribe(result => this.pid=result.get('a'))
   r.queryParamMap.subscribe(result => {
    this.pid=result.get('a')
   this.pname=result.get('b')
   this.price=result.get('c')
   this.pimage=result.get('d')
   })
  }

  placeorder()
  {
  
    console.log('entered inside placeorder')
    var res={
      username:sessionStorage.getItem("u"),
          pid:this.pid,
          transdate:new Date(),
          qty:this.qty
    }
    this.ob.buy(res).subscribe(c => alert(c.toString))
  
  }

  hi(){
    this.ob.add(10,30);
  }
}
