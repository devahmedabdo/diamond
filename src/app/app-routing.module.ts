import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CartComponent } from './views/cart/cart.component';
import { SinglProductComponent } from './views/singl-product/singl-product.component';
import { UserLogComponent } from './views/user-log/user-log.component';
import { SingleBlogComponent } from './views/single-blog/single-blog.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AllBlogsComponent } from './views/all-blogs/all-blogs.component';
import { ProductsComponent } from './views/products/products.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: SinglProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: UserLogComponent },
  { path: 'signup', component: UserLogComponent },
  { path: 'blog', component:SingleBlogComponent },
  { path: 'blogs', component:AllBlogsComponent },
  { path: 'products', component:ProductsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
