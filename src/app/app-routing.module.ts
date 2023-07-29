import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import  { PhoneNumberComponent } from './phone-number/phone-number.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';

const routes: Routes = [
  { path: 'missnumber'  ,
  component: MissingNumberComponent,
},
{
  path: 'phone',
  component: PhoneNumberComponent,
},
{
  path: 'fourth',
  component: FourthComponent, 
},
{
  path: 'fifth',
  component: FifthComponent, 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MissingNumberComponent,
  PhoneNumberComponent,
];