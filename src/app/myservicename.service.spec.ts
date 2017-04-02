/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyservicenameService } from './myservicename.service';

describe('MyservicenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyservicenameService]
    });
  });

  it('should ...', inject([MyservicenameService], (service: MyservicenameService) => {
    expect(service).toBeTruthy();
  }));
});
