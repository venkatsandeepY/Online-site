import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

status : string ='';
constructor(public ob: Router){

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
  }
