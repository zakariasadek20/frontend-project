import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-appointment-dashboard-doctor',
  templateUrl: './modal-appointment-dashboard-doctor.component.html',
  styleUrls: ['./modal-appointment-dashboard-doctor.component.css'],
})
export class ModalAppointmentDashboardDoctorComponent implements OnInit {
  @Input() datetime;
  @Input() status;
  @Input() amount;

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
}
