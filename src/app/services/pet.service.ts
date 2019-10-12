import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  apiHost: string = environment.apiEndpointHost;

  constructor(private http: HttpClient) { }

  public getPets() {
    const apiEndpointUrl = this.apiHost + environment.apiEndpointUris.apiEndpointPets;
    return this.http.get(apiEndpointUrl);
  }
}
