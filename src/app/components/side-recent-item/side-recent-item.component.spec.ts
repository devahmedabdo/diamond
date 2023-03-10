import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRecentItemComponent } from './side-recent-item.component';

describe('SideRecentItemComponent', () => {
  let component: SideRecentItemComponent;
  let fixture: ComponentFixture<SideRecentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideRecentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideRecentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
