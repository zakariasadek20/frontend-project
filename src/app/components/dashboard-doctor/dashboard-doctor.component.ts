import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../services/docteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {
  docteur: any = {
    docteur_id: 0,
    docteur_nom: '',
    prenom: '',
    tele_portable: '',
    sexe: '',
    a_propos: '',
    code_postal: '',
    prix_visite: '',
    ville: [{ ville_id: '0', nom: '' }],
    position: { position_id: 0, latitude: '', longitude: '' },
    specialites: [{ specialite_id: '0', nom: '', docteurs_count: 0 }],
    jourDeTravail: [{ jour_index: 0, heure_deb: '', docteurs_count: 0 }],
    services: [{ service_id: '0', service_nom: '', heurs_fin: 0 }],
    educations: [{ degre: '', universite: '', annee: 0 }],
    experiences: [{ hospitale: '', debut: '', fin: '' }],
    awards: [{ award: '', annee: 0 }],
  };

  rendezvous = [];
  rendezvousToday = [];

  today = new Date();

  constructor(
    private docteurService: DocteurService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {


    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.docteurService.getById(id).subscribe((docteur) => {
      this.docteur = docteur['data'];
    });

    this.getdocteurAllRendez(id)

  }


  getdocteurAllRendez(id) {
    this.docteurService.getDoctorAllRendezVous(id).subscribe((rendezvous) => {
      this.rendezvous = rendezvous['data'];

      this.handelrendezvousToday();

    });
  }
  handelrendezvousToday() {
    this.rendezvous.forEach((rdv) => {

      let currentRDV = new Date(rdv.datetime);
      this.today.setHours(0, 0, 0, 0)
      currentRDV.setHours(0, 0, 0, 0)

      if (this.today.getTime() == currentRDV.getTime()) {
        this.rendezvousToday.push(rdv);
      }
    })

  }
}
