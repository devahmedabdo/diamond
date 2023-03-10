import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserService } from './services/user.service';
import { SingleBlogComponent } from './views/single-blog/single-blog.component';
import { CommentComponent } from './views/single-blog/components/comment/comment.component';
import { ItemCategoryComponent } from './components/item-category/item-category.component';
import { TagsComponent } from './components/tags/tags.component';
// import { CategoriesSearchComponent } from './components/categories-search/categories-search.component';
import { SideSearchComponent } from './components/side-search/side-search.component';
import { SideRecentItemComponent } from './components/side-recent-item/side-recent-item.component';
import { AllBlogsComponent } from './views/all-blogs/all-blogs.component';
import { ProductsComponent } from './views/products/products.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { BlogsComponent } from './views/blogs/blogs.component';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';


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
    SingleBlogComponent,
    CommentComponent,
    ItemCategoryComponent,
    TagsComponent,
    // CategoriesSearchComponent,
    SideSearchComponent,
    SideRecentItemComponent,
    AllBlogsComponent,
    ProductsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ImageCropperModule
  ],
  providers: [
    ProductsService,
    TokenInterceptorService,
    ElementServices,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
