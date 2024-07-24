import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIconComponent } from './drink-icon.component';

describe('DrinkIconComponent', () => {
  let component: DrinkIconComponent;
  let fixture: ComponentFixture<DrinkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrinkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
