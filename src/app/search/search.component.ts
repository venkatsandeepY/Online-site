import { Component } from '@angular/core';
import { OnlineserviceService, IPrd } from '../onlineservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [OnlineserviceService]
})
export class SearchComponent {
  prod: IPrd[];
  data: any;

  constructor(public p: OnlineserviceService, public r: ActivatedRoute) {
    //r.queryParamMap.subscribe(result => this.pname=result.get('s'))
    this.prod = p.prod;
    this.show()
  }

  show() {
    this.r.queryParamMap.subscribe(result => {
      this.data = result.get('s')
      this.prod = this.prod.filter(c => c.pname.includes(this.data))
    })
  }
}
