import { TestBed } from '@angular/core/testing';

import { NgxNiceAvatarService } from './ngx-nice-avatar.service';

describe('NgxNiceAvatarService', () => {
  let service: NgxNiceAvatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNiceAvatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
