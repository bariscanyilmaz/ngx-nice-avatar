import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesComponent } from './glasses.component';

describe('GlassesComponent', () => {
  let component: GlassesComponent;
  let fixture: ComponentFixture<GlassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
