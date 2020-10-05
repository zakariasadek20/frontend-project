import { DatePipe } from '@angular/common';
import { DocteurService } from './../../services/docteur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout-doctor',
  templateUrl: './checkout-doctor.component.html',
  styleUrls: ['./checkout-doctor.component.css'],
})
export class CheckoutDoctorComponent implements OnInit {
  chekoutForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    accept: new FormControl('', [Validators.requiredTrue]),
  });

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

  selectedTimeBooking: Date;
  bookedSuccessfully: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private docteurService: DocteurService,
    private datePipe: DatePipe
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.selectedTimeBooking = new Date(
      this.activatedRoute.snapshot.queryParamMap.get('booking')
    );

    console.log(this.selectedTimeBooking);

    this.getById(id);
  }

  ngOnInit(): void {}

  getById(id) {
    this.docteurService.getById(id).subscribe((docteur) => {
      this.docteur = docteur['data'];
    });
  }
  checkbtn() {
    let data = {
      nom: this.chekoutForm.value.nom,
      prenom: this.chekoutForm.value.prenom,
      email: this.chekoutForm.value.email,
      telephone: this.chekoutForm.value.telephone,
      datetime: this.datePipe.transform(
        this.selectedTimeBooking,
        'y-MM-dd H:mm:ss'
      ),
      docteur_id: this.docteur.docteur_id,
    };
console.log(data);

    this.docteurService.bookingDocteurGestPatient(data).subscribe((rdv) => {

      this.selectedTimeBooking = new Date(rdv['datetime']);
      this.bookedSuccessfully = true;
      
    });
  }
}
