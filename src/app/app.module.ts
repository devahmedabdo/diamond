import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { SinglProductSwiperComponent } from './views/singl-product/components/singl-product-swiper/singl-product-swiper.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './views/home/components/landing/landing.component';
import { CategoriesComponent } from './views/home/components/categories/categories.component';
import { TrendingComponent } from './views/home/components/trending/trending.component';
import { BestSellerComponent } from './views/home/components/best-seller/best-seller.component';
import { TestimonialsComponent } from './views/home/components/testimonials/testimonials.component';
import { SponsersComponent } from './views/home/components/sponsers/sponsers.component';
import { BlogsComponent } from './views/home/components/blogs/blogs.component';
import { WhyUsComponent } from './views/home/components/why-us/why-us.component';
import { SubscribeComponent } from './views/home/components/subscribe/subscribe.component';
import { UserLogComponent } from './views/user-log/user-log.component';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AnimatedBgComponent } from './components/animated-bg/animated-bg.component';
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
    SinglProductSwiperComponent,
    LandingComponent,
    CategoriesComponent,
    TrendingComponent,
    BestSellerComponent,
    TestimonialsComponent,
    SponsersComponent,
    BlogsComponent,
    WhyUsComponent,
    SubscribeComponent,
    UserLogComponent,
    NotFoundComponent,
    AnimatedBgComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService, ElementServices],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
