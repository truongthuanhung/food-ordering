import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaIconComponent } from './tea-icon.component';

describe('TeaIconComponent', () => {
  let component: TeaIconComponent;
  let fixture: ComponentFixture<TeaIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeaIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
