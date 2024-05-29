import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OnlineserviceService } from '../onlineservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers :[OnlineserviceService]
})
export class LoginComponent {

status : string ='';
constructor(public ob: Router , public l : OnlineserviceService){

}
  validate(frm:any)
  {
    //let u = (document.getElementById("uid") as HTMLInputElement).value
  // let p = (document.getElementById("pwd") as HTMLInputElement).value

    if(frm.uid=="admin")
      {
        this.ob.navigate(['products'])
         this.status = "valid user";
         sessionStorage.setItem("u",frm.uid)
      }
      else{
        
          this.status ="invalid user";
      }
  }

  result:any
login(data:any)
{
this.l.userlogin(data).subscribe(c=> {this.result= c
if(this.result > 0)
  {
    this.ob.navigate(['products'])
    sessionStorage.setItem("u",data.uname)
  }
  else
  {
    this.status="invalid user"
  }

})
  
}
}
