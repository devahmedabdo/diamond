import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';

import { SwiperModule } from 'swiper/angular';
import { ToTopComponent } from './layout/to-top/to-top.component';
import { ProductComponent } from './components/product/product.component';

import { ProductsService } from './services/products.service';
import { ElementServices } from './services/element.service';
import { CartComponent } from './views/cart/cart.component';
import { CompareComponent } from './components/compare/compare.component';
import { SinglProductComponent } from './views/singl-product/singl-product.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToTopComponent,
    ProductComponent,
    CartComponent,
    CompareComponent,
    SinglProductComponent,
    NavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [ProductsService, ElementServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
