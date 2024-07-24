import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertIconComponent } from './dessert-icon.component';

describe('DessertIconComponent', () => {
  let component: DessertIconComponent;
  let fixture: ComponentFixture<DessertIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DessertIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
