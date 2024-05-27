import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  fg: any;
  constructor() {
    this.fg = new FormGroup({
      username: new FormControl("admin", [Validators.required]),
      email: new FormControl(" ", [Validators.email]),
      Message: new FormControl(" ", [Validators.maxLength(5)]),
      Age: new FormControl(10, [AgeValidator])
    })

  }

  showdata(gfrm: any) {
    if (this.fg.valid) {
      alert(gfrm.username + ":" + gfrm.email + ":" + gfrm.Message)

    }
    else

      alert("invalid")
  }
}

export function AgeValidator(txt: AbstractControl) {

  const data = parseInt(txt.value)
  if (data >= 18) {
    return null; //do not display the error(valid state)
  }
  else {
    return {
      age: true  //return dat (no error)
    }
  }
}
