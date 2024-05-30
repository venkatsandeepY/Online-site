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

    if(frm.uname=="admin")
      {
        this.ob.navigate(['products'])
         this.status = "valid user";
         sessionStorage.setItem("u",frm.uname)
      }
      else{
        
          this.status ="invalid user";
      }
  }

  result:any
  loginuser(data:any)
  {
  this.l.userlogin(data).subscribe(c=> {this.result= c.message[0].cnt
  
  if(this.result > 0)
    {
      alert(this.result)
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
