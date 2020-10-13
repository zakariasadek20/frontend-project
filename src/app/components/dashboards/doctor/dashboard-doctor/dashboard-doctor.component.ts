import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAppointmentDashboardDoctorComponent } from './../modal-appointment-dashboard-doctor/modal-appointment-dashboard-doctor.component';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../../../services/docteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent implements OnInit {

  rendezvous = [];
  rendezvousToday = [];

  today = new Date();
  amount=0;

  constructor(
    private docteurService: DocteurService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private modalService: NgbModal,

  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getdocteurAllRendez(id);
    this.getAmountDocteur(id);
  }

  getAmountDocteur(id){
    this.docteurService.getById(id).subscribe((docteur)=>{
      this.amount=docteur['data'].prix_visite;
    });
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
      this.today.setHours(0, 0, 0, 0);
      currentRDV.setHours(0, 0, 0, 0);

      if (this.today.getTime() == currentRDV.getTime()) {
        this.rendezvousToday.push(rdv);
      }
    });
  }

  open(datetime,status) {
    const modalRef = this.modalService.open(
      ModalAppointmentDashboardDoctorComponent,
      { centered: true }
    );
    modalRef.componentInstance.datetime =datetime ;
    modalRef.componentInstance.status =status ;
    modalRef.componentInstance.amount =this.amount ;
  }

}
