import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

status : string ='';
  validate(frm:any)
  {
    //let u = (document.getElementById("uid") as HTMLInputElement).value
  // let p = (document.getElementById("pwd") as HTMLInputElement).value

    if(frm.uid=="admin" && frm.pwd=="a1234")
      {
         this.status = "valid user";
      }
      else{
          this.status ="invalid user";
      }
  }
  }
