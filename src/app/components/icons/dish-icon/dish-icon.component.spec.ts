import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishIconComponent } from './dish-icon.component';

describe('DishIconComponent', () => {
  let component: DishIconComponent;
  let fixture: ComponentFixture<DishIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DishIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
