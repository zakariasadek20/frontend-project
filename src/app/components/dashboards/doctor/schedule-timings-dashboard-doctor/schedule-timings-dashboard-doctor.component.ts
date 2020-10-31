import { DocteurService } from './../../../../services/docteur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddTimeSlotsDashboardDoctorComponent } from './../modal-add-time-slots-dashboard-doctor/modal-add-time-slots-dashboard-doctor.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-timings-dashboard-doctor',
  templateUrl: './schedule-timings-dashboard-doctor.component.html',
  styleUrls: ['./schedule-timings-dashboard-doctor.component.css'],
})
export class ScheduleTimingsDashboardDoctorComponent implements OnInit {
  jourDeTravail = [{ jour_id: 0, jour_index: 0, heure_deb: '', heure_fin: '' }];
  day = {
    jour_id: 0,
    jour_index: 0,
    heure_deb: '-',
    heure_fin: '-',
  };
  docteurId;
  selectedDay = 1;
  constructor(
    private modalService: NgbModal,
    private activateRoute: ActivatedRoute,
    private docteurService: DocteurService,
    private route: Router
  ) {
    this.docteurId = this.activateRoute.parent.snapshot.paramMap.get('id');
    this.getDocteur(this.docteurId);
  }

  ngOnInit(): void {}
  getDocteur(id) {
    this.docteurService.getById(id).subscribe((docteur) => {
      // this.docteur = docteur['data'].jourDeTravail;
      this.jourDeTravail = docteur['data'].jourDeTravail;

      this.handelDays();
      console.log(this.jourDeTravail);
    });
  }
  handleDay(jour_index) {
    switch (jour_index) {
      case 1:
        return 'Lundi';
        break;
      case 2:
        return 'Mardi';
        break;
      case 3:
        return 'Mercredi';
        break;
      case 4:
        return 'Jeudi';
        break;
      case 5:
        return 'Vendredi';
        break;
      case 6:
        return 'Samedi';
        break;
      case 7:
        return 'Dimanche';
        break;
    }
  }

  handleId(jour_index) {
    switch (jour_index) {
      case 1:
        return '#slot_sunday';
        break;
      case 2:
        return '#slot_monday';
        break;
      case 3:
        return '#slot_tuesday';
        break;
      case 4:
        return '#slot_wednesday';
        break;
      case 5:
        return '#slot_thursday';
        break;
      case 6:
        return '#slot_friday';
        break;
      case 7:
        return '#slot_saturday';
        break;
    }
  }

  handelDays() {
    let index = 1;
    for (let i = 0; i < 7; i++) {
      if (this.jourDeTravail.length >= index) {
        if (this.jourDeTravail[i].jour_index !== index) {
          this.jourDeTravail.splice(index - 1, 0, {
            jour_id: 0,
            jour_index: index,
            heure_deb: '',
            heure_fin: '',
          });
        }
        if (index - 1 <= this.jourDeTravail.length) {
          index++;
        }
      } else {
        this.jourDeTravail.splice(index - 1, 0, {
          jour_id: 0,
          jour_index: index,
          heure_deb: '',
          heure_fin: '',
        });
        if (index - 1 <= this.jourDeTravail.length) {
          index++;
        }
      }
    }
  }

  //Show modal add
  add(jour_index) {
    this.day.jour_index = jour_index;
    const modalRef = this.modalService.open(
      ModalAddTimeSlotsDashboardDoctorComponent,
      { centered: true }
    );
    modalRef.componentInstance.day = this.day;
    modalRef.componentInstance.docteurId = this.docteurId;

    modalRef.result.then((result) => {
      console.log(result);
      this.jourDeTravail[jour_index - 1] = {
        jour_id: result.jour_id,
        jour_index: result.jour_index,
        heure_deb: result.heure_deb,
        heure_fin: result.heure_fin,
      };
      this.selectedDay = result.jour_index;
      this.day={
        jour_id:0,
        jour_index: 0,
        heure_deb: '-',
        heure_fin: '-'
      };

    },(reason) => {
      // when the Promise is rejected.
    });
  }

  edit(currentDay) {
    const modalRef = this.modalService.open(
      ModalAddTimeSlotsDashboardDoctorComponent,
      { centered: true }
    );
    modalRef.componentInstance.day = currentDay;
    modalRef.componentInstance.docteurId = this.docteurId;

    modalRef.result.then((result) => {
      console.log(result);
      this.jourDeTravail[currentDay.jour_index - 1] = {
        jour_id: result.jour_id,
        jour_index: result.jour_index,
        heure_deb: result.heure_deb,
        heure_fin: result.heure_fin,
      };
      this.selectedDay = result.jour_index;
      this.day={
        jour_id:0,
        jour_index: 0,
        heure_deb: '-',
        heure_fin: '-'
      };
    },(reason) => {
      // when the Promise is rejected.
    });
  }

  delete(day) {
    this.docteurService
      .destroyJourDeTravailById(this.docteurId, day.jour_id)
      .subscribe((res) => {
        this.selectedDay = day.jour_index;
        this.jourDeTravail[day.jour_index - 1] = {
          jour_id: 0,
          jour_index: day.jour_index,
          heure_deb: '',
          heure_fin: '',
        };
        console.log(day);
        console.log(this.jourDeTravail);
      },(reason) => {
        // when the Promise is rejected.
      });
  }

}
