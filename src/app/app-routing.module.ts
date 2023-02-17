import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { SinglProductComponent } from './views/singl-product/singl-product.component';
import { UserLogComponent } from './views/user-log/user-log.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: SinglProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: UserLogComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
