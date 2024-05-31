import { Component } from '@angular/core';

@Component({
  selector: 'app-angularfeatures',
  templateUrl: './angularfeatures.component.html',
  styleUrl: './angularfeatures.component.css'
})
export class AngularfeaturesComponent {

  b: boolean = true;
  type: number = 2

  countries : string[] = [
    "india","uk","japan","usa"
  ]

  show()
  {
    this.b = !this.b;
  }
 }
