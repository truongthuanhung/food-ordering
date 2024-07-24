import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuItemComponent } from './home-menu-item.component';

describe('HomeMenuItemComponent', () => {
  let component: HomeMenuItemComponent;
  let fixture: ComponentFixture<HomeMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMenuItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
