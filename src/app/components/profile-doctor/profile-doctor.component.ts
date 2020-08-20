import { ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../services/docteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.css']
})
export class ProfileDoctorComponent implements OnInit {

  docteur: any={
    'docteur_id':0,
    'docteur_nom':'',
    'prenom':'',
    'tele_portable':'',
    'sexe':'',
    'a_propos':'',
    'code_postal':'',
    'prix_visite':'',
    'ville':[{'ville_id':'0','nom':''}],
    'position':{'position_id':0,'latitude':'','longitude':''},
    'specialites':[{'specialite_id':'0','nom':'','docteurs_count':0}],
    'services':[{'service_id':'0','service_nom':'','service_prix':0}],
    'educations':[{'degre':'','universite':'','annee':0}],
    'experiences':[{'hospitale':'','debut':'','fin':''}],
    'awards':[{'award':'','annee':0}]

  };

  id;

  constructor(private docteurService:DocteurService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get('id');

    this.getById();

  }

  ngOnInit(): void {
  }

  getById(){
    this.docteurService.getById(this.id).subscribe((docteur)=>{
      this.docteur=docteur['data'];

    });
  }

}
