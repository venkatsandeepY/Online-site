import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  
 childmsg : string =''
  mydata : string = "good morning students"
  readfromchild(data : any)
  {
    this.childmsg = data;
  }
}
