import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  prod: IPrd[] = [
    { pid: "p001", pname: "TV", price: 10000, qty: 10, pimage: '/assets/tv.jpg' },
    { pid: "p002", pname: "Washingmachine", price: 12000, qty: 9, pimage: '/assets/washingmachine.jpg' },
    { pid: "p003", pname: "Monitor", price: 11000, qty: 3, pimage: '/assets/monitor.jpg' },
    { pid: "p004", pname: "Watch", price: 9000, qty: 5, pimage: '/assets/watch.jpg' },
    { pid: "p005", pname: "Fan", price: 300, qty: 9, pimage: '/assets/fan.jpg' },
    { pid: "p006", pname: "Fridge", price: 30000, qty: 55, pimage: '/assets/Fridge.jpg' },
    { pid: "p007", pname: "Projector", price: 80000, qty: 33, pimage: '/assets/projector.jpg' },
    { pid: "p008", pname: "Power Bank", price: 90000, qty: 44, pimage: '/assets/Invertor.jpg' },
    { pid: "p009", pname: "ac", price: 190000, qty: 44, pimage: '/assets/ac.jpg' },
    { pid: "p010", pname: "car", price: 900000, qty: 44, pimage: '/assets/car.jpg' },
    { pid: "p011", pname: "mobile", price: 19000, qty: 44, pimage: '/assets/mobile.jpg' },
  ]
  value: Boolean = true;
  showOrHide() {
    this.value = !this.value
  }

}
interface IPrd {
  pid?:string; pname: string, price: number, qty: number, pimage: string
}