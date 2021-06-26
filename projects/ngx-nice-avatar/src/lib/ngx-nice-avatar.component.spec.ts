import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNiceAvatarComponent } from './ngx-nice-avatar.component';

describe('NgxNiceAvatarComponent', () => {
  let component: NgxNiceAvatarComponent;
  let fixture: ComponentFixture<NgxNiceAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNiceAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNiceAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
