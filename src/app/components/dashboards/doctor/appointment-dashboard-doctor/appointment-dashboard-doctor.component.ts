import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../../../services/docteur.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAppointmentDashboardDoctorComponent } from '../modal-appointment-dashboard-doctor/modal-appointment-dashboard-doctor.component';

@Component({
  selector: 'app-appointment-dashboard-doctor',
  templateUrl: './appointment-dashboard-doctor.component.html',
  styleUrls: ['./appointment-dashboard-doctor.component.css'],
})
export class AppointmentDashboardDoctorComponent implements OnInit {
  rendezvous = [];
  constructor(
    private modalService: NgbModal,
    private docteurService: DocteurService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe
  ) {}
  amount = 0;
  id_docteur;
  ngOnInit(): void {
    this.id_docteur = this.activatedRoute.parent.snapshot.paramMap.get('id');

    this.getdocteurAllRendez(this.id_docteur);
    this.getAmountDocteur(this.id_docteur);
  }

  getAmountDocteur(id) {
    this.docteurService.getById(id).subscribe((docteur) => {
      this.amount = docteur['data'].prix_visite;
    });
  }
  getdocteurAllRendez(id) {
    this.docteurService.getDoctorAllRendezVous(id).subscribe((rendezvous) => {
      this.rendezvous = rendezvous['data'];
    });
  }

  open(datetime, status) {
    const modalRef = this.modalService.open(
      ModalAppointmentDashboardDoctorComponent,
      { centered: true }
    );
    modalRef.componentInstance.datetime = datetime;
    modalRef.componentInstance.status = status;
    modalRef.componentInstance.amount = this.amount;
  }

  updateRendezVousEtat(rendezvous, status) {
    this.docteurService
      .updateRendezVousEtat(this.id_docteur, rendezvous.id, status)
      .subscribe((rdv) => {
        rendezvous.status = status;
      });
  }
}
