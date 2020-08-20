import { DocteurService } from './../../services/docteur.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Time, DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking-doctor',
  templateUrl: './booking-doctor.component.html',
  styleUrls: ['./booking-doctor.component.css']
})
export class BookingDoctorComponent implements OnInit {

  docteur: any = {
    'docteur_id': 0,
    'docteur_nom': '',
    'prenom': '',
    'tele_portable': '',
    'sexe': '',
    'a_propos': '',
    'code_postal': '',
    'prix_visite': '',
    'ville': [{ 'ville_id': '0', 'nom': '' }],
    'position': { 'position_id': 0, 'latitude': '', 'longitude': '' },
    'specialites': [{ 'specialite_id': '0', 'nom': '', 'docteurs_count': 0 }],
    'jourDeTravail': [{ 'jour_index': '0', 'heure_deb': '', 'docteurs_count': 0 }],
    'services': [{ 'service_id': '0', 'service_nom': '', 'heurs_fin': 0 }],
    'educations': [{ 'degre': '', 'universite': '', 'annee': 0 }],
    'experiences': [{ 'hospitale': '', 'debut': '', 'fin': '' }],
    'awards': [{ 'award': '', 'annee': 0 }]

  };
  heureTravail:any=[];

  constructor(private router: ActivatedRoute, private docteurService: DocteurService ,private datePipe: DatePipe) {

    let id = this.router.snapshot.paramMap.get('id');
    this.getDocteurById(id);
  }

  ngOnInit(): void {

  }


  getDocteurById(id) {
    this.docteurService.getById(id).subscribe((docteur) => {
      this.docteur = docteur['data'];
      console.log(this.docteur);
     // this.handelHours(this.docteur.jourDeTravail[0].heure_deb,this.docteur.jourDeTravail[0].heurs_fin);
      console.log(this.docteur.jourDeTravail[0].heure_deb);
      console.log(this.docteur.jourDeTravail[0].heurs_fin);
      let date:Date=new Date(this.datePipe.transform(this.docteur.jourDeTravail[0].heure_deb,'h:mm:ss'));
      console.log(date);

      // console.log(this.heureTravail);

    });
  }

  handleDay(jourIndex) {
    switch (jourIndex) {
      case 1:
        return 'Lun';
        break;
      case 2:
        return 'Mar';
        break;
      case 3:
        return 'Mer';
        break;
      case 4:
        return 'Jeu';
        break;
      case 5:
        return 'Ven';
        break;
      case 6:
        return 'Sam';
        break;
      case 7:
        return 'Dim';
        break;
    }
  }

  handleDate(jourIndex){
    let currentDate:Date=new Date();

    let currentDayIndex=currentDate.getDay();
    if (jourIndex<=currentDayIndex) {
      let diffDays=currentDayIndex-jourIndex;
      currentDate.setDate(currentDate.getDate()-diffDays);
      return currentDate;
    }else{
      let diffDays=jourIndex-currentDayIndex;
      currentDate.setDate(currentDate.getDate()+diffDays);
      return currentDate;
    }
  }

  handelHours(heureDeb:Date,heurfin:Date){

    let currentH:Date=heureDeb;
    while (currentH<=heurfin) {
      this.heureTravail=[...this.heureTravail,this.datePipe.transform(currentH.getTime(),'h:mm')];
      currentH.setMinutes(currentH.getMinutes()+30);
    }
  }
}
