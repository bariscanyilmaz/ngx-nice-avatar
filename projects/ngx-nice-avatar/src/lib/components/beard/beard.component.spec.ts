import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeardComponent } from './beard.component';

describe('BeardComponent', () => {
  let component: BeardComponent;
  let fixture: ComponentFixture<BeardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
