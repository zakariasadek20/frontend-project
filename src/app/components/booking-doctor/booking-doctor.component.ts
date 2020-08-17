import { DocteurService } from './../../services/docteur.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-doctor',
  templateUrl: './booking-doctor.component.html',
  styleUrls: ['./booking-doctor.component.css']
})
export class BookingDoctorComponent implements OnInit {

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

  constructor(private router:ActivatedRoute,private docteurService:DocteurService) {

    let id = this.router.snapshot.paramMap.get('id');
    this.getDocteurById(id);
   }

  ngOnInit(): void {
  }


  getDocteurById(id){
    this.docteurService.getById(id).subscribe((docteur)=>{
      this.docteur=docteur['data'];

    });
  }
}
