import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseComponent } from './nose.component';

describe('NoseComponent', () => {
  let component: NoseComponent;
  let fixture: ComponentFixture<NoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
