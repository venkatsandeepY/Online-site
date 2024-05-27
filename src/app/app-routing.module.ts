import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchComponent } from './search/search.component';
import { BuyComponent } from './buy/buy.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'buy',component:BuyComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'**', component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
