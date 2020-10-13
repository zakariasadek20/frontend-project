import { ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../../../services/docteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-dashboard-doctor',
  templateUrl: './sidebar-dashboard-doctor.component.html',
  styleUrls: ['./sidebar-dashboard-doctor.component.css']
})
export class SidebarDashboardDoctorComponent implements OnInit {

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

  constructor(
    private docteurService: DocteurService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.docteurService.getById(id).subscribe((docteur) => {
      this.docteur = docteur['data'];
    });
  }

}
