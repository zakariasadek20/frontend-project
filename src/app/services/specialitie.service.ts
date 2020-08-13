import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecialitieService {

  constructor(private http:HttpClient ) { }

  getall(){
    return this.http.get(`${environment.baseUrl}/specialites`);
  }
  
}
