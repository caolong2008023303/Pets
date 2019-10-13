import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PetComponent } from './pet.component';
import { PetService } from './../../services/pet.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import * as successData from './../../mocks/success.json';
import * as errorData from './../../mocks/error.json';

describe('PetComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [PetComponent],
      providers: [
        { provide: PetService, useClass: PetService },
        HttpClient
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct content', () => {
    let petService = TestBed.get(PetService);
    spyOn(petService, 'getOwners').and.returnValue(of(successData));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.displayedData).not.toBeNull();
  });

  it('should show error content', () => {
    let petService = TestBed.get(PetService);
    spyOn(petService, 'getOwners').and.returnValue(of(errorData));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.displayedFlag).toEqual(false);
  });

});
