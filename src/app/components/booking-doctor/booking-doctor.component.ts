import { DocteurService } from './../../services/docteur.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Time, DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking-doctor',
  templateUrl: './booking-doctor.component.html',
  styleUrls: ['./booking-doctor.component.css'],
})
export class BookingDoctorComponent implements OnInit {
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

  // store list of days and hours work
  timings:any = [];

  constructor(
    private router: ActivatedRoute,
    private docteurService: DocteurService,
    private datePipe: DatePipe
  ) {
    let id = this.router.snapshot.paramMap.get('id');
    this.getDocteurById(id);
  }

  ngOnInit(): void {}

  getDocteurById(id) {
    this.docteurService.getById(id).subscribe((docteur) => {
      this.docteur = docteur['data'];
      console.log(this.docteur);
      // this.handelDays(docteur['data'].jourDeTravail);
    });

    this.docteurService.getTiming(id).subscribe((timings) => {
      this.timings=timings;
      console.log(this.timings);
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

  selectedTimeBooking: Date;

  selectHoure(hour) {
    this.timings.forEach((day) => {
      day.hours.forEach((hr) => {
        if (hr === hour) {
          hour.selected = !hour.selected;
          if (hour.selected) {
            this.selectedTimeBooking = new Date(day.date + ' ' + hour.heure);
          } else {
            this.selectedTimeBooking = null;
          }
        } else {
          hr.selected = false;
        }
      });
    });
    console.log(this.selectedTimeBooking);
  }

  //not Completed
  handelDays(jourDeTravail) {
    let days = [...jourDeTravail];
    let currentDayIndex = new Date().getDay();
    // days.forEach(day => {
    //   if (day.jour_index < currentDayIndex) {
    //     days.splice(days.indexOf(day),1);
    //     days.push(day);
    //   }else{
    //     return false;
    //   }
    // });
    // restartLoop:
    for (let _i = 0; _i < days.length; _i++) {
      if ((days[_i].jour_index as number) < currentDayIndex) {
        const index = _i;
        // console.log(days[index]);
        // console.log(days[_i]);
        // console.log(days.indexOf(days[_i]));
        days.splice(index, index);
        // days.push(day);
        // newdays=[...newdays,days.splice(index,1)];
        _i = 0;
        continue;
        // continue;
        // lenght=days.length
      } else {
        // newdays=[...newdays,days.splice(index,1)];
        // index = 0;
        // lenght=days.length
      }
    }
    // days.splice(1, 1);
    // days.splice(1, 1);
    console.log(days);
    // console.log(currentDayIndex);
  }
}
