import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyebrowsComponent } from './eyebrows.component';

describe('EyebrowsComponent', () => {
  let component: EyebrowsComponent;
  let fixture: ComponentFixture<EyebrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyebrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyebrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
