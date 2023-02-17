import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglProductSwiperComponent } from './singl-product-swiper.component';

describe('SinglProductSwiperComponent', () => {
  let component: SinglProductSwiperComponent;
  let fixture: ComponentFixture<SinglProductSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglProductSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglProductSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
