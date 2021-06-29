import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouthComponent } from './mouth.component';

describe('MouthComponent', () => {
  let component: MouthComponent;
  let fixture: ComponentFixture<MouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
