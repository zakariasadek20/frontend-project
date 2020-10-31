import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DocteurService {
  constructor(private http: HttpClient) {}
  /* service dyal api hada */
  getByVille(ville) {
    return this.http.post(`${environment.baseUrl}/docteurs/ville`, {
      ville_name: ville,
    });
  }

  getByDistance(latitude, longitude, zone) {
    return this.http.post(`${environment.baseUrl}/docteurs/distance`, {
      latitude: latitude,
      longitude: longitude,
      zone: zone,
    });
  }

  getByspecialiti(id) {
    return this.http.post(`${environment.baseUrl}/specialites/docteurs`, {
      specialite_id: id,
    });
  }

  getById(id) {
    return this.http.get(`${environment.baseUrl}/docteurs/${id}`);
  }

  bookingDocteurGestPatient(data: {
    nom;
    prenom;
    email;
    telephone;
    datetime;
    docteur_id;
  }) {
    return this.http.post(
      `${environment.baseUrl}/docteurs/rendezVous/guestPatient`,
      data
    );
  }

  checkBooking(datetime) {
    return this.http.post(`${environment.baseUrl}/rendezvous`, datetime);
  }
  getTiming(docteurId) {
    return this.http.get(
      `${environment.baseUrl}/docteurs/${docteurId}/jourDeTravails`
    );
  }

  getDoctorAllRendezVous(docteurId) {
    return this.http.get(
      `${environment.baseUrl}/docteurs/${docteurId}/rendezvous`
    );
  }

  updateRendezVousEtat(docteurId, rendezvousId, status) {
    return this.http.put(
      `${environment.baseUrl}/docteurs/${docteurId}/rendezvous/${rendezvousId}/etat`,
      { etat: status }
    );
  }

  storeJourDeTravail(docteurId,data: { jour_index; heure_deb; heure_fin }) {
    return this.http.post(
      `${environment.baseUrl}/docteurs/${docteurId}/jourDeTravails`,
      data
    );
  }

  destroyJourDeTravailById(docteurId,jour_id) {
    return this.http.delete(
      `${environment.baseUrl}/docteurs/${docteurId}/jourDeTravails/${jour_id}`
    );
  }
}
