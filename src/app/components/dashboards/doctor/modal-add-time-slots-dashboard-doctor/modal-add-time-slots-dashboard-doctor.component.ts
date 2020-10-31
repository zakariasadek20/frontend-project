import { DatePipe } from '@angular/common';
import { DocteurService } from './../../../../services/docteur.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-add-time-slots-dashboard-doctor',
  templateUrl: './modal-add-time-slots-dashboard-doctor.component.html',
  styleUrls: ['./modal-add-time-slots-dashboard-doctor.component.css']
})
export class ModalAddTimeSlotsDashboardDoctorComponent implements OnInit {

  @Input() public day= {
    jour_id:0,
    jour_index: 0,
    heure_deb: '-',
     heure_fin: '-'
  };;
  heures=[];
  @Input() public docteurId;
  constructor(
    public activeModal: NgbActiveModal,
    private docteurService:DocteurService,
    private datePipe:DatePipe,
    ) { }
  ngOnInit(): void {
    this.handelHours()
  }

  saveChanges(){
    console.log(this.day);

    this.docteurService.storeJourDeTravail(this.docteurId,this.day).subscribe((day)=>{
      this.day=day['data'];
      this.activeModal.close(this.day);
    });
  }

  handelHours() {

      let currentDateString = this.datePipe.transform(
        new Date(),
        'MMMM d y'
      );
      let heureDeb: Date = new Date(currentDateString + ' 08:00:00');
      let heurfin: Date = new Date(currentDateString + ' 18:00:00');
      let currentH: Date = heureDeb;
      while (currentH <= heurfin) {
        let expired = heureDeb.getTime() < new Date().getTime() ? true : false;
        this.heures.push({
          heure: this.datePipe.transform(currentH.getTime(), 'H:mm'),
          value: this.datePipe.transform(currentH.getTime(), 'HH:mm:ss'),
        });
        currentH.setMinutes(currentH.getMinutes() + 30);
      }
      console.log(this.heures);
  }

}
