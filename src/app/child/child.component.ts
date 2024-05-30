import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit  , OnChanges ,DoCheck,OnDestroy{
  ngOnDestroy(): void {
    //write clean up logic here
    console.log("destroy method called")
  }
  ngDoCheck(): void {
  console.log("do check event is triggered")
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
  }
  ngOnInit(): void {
    //any logic related to the child component
    console.log("write initialization coding here")
  }

  @Input()
  childdata : string='';

  @Output()
  myevent : EventEmitter<string> = new EventEmitter<string>

  sendmessage()
  {
      this.myevent.emit("Message from child..")
  }
  

}
