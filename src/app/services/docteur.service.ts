import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {

  constructor(private http: HttpClient) { }
  /* service dyal api hada */
  getByVille(ville) {
    return this.http.post(`${environment.baseUrl}/docteurs/ville`, { ville_name: ville });
  }

  getByDistance(latitude, longitude, zone) {
    return this.http.post(`${environment.baseUrl}/docteurs/distance`, { latitude: latitude, longitude: longitude, zone: zone });
  }

}
