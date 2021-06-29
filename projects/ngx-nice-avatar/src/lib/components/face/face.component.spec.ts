import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceComponent } from './face.component';

describe('FaceComponent', () => {
  let component: FaceComponent;
  let fixture: ComponentFixture<FaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
