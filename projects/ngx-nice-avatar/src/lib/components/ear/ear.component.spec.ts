import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarComponent } from './ear.component';

describe('EarComponent', () => {
  let component: EarComponent;
  let fixture: ComponentFixture<EarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
