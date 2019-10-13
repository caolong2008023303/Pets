import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PetService } from './pet.service';

describe('PetService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      HttpClient
    ],
  }));

  it('should be created', () => {
    const service: PetService = TestBed.get(PetService);
    expect(service).toBeTruthy();
  });
});
