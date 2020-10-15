import { ActivatedRoute } from '@angular/router';
import { DocteurService } from './../../../../services/docteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard-doctor',
  templateUrl: './patient-dashboard-doctor.component.html',
  styleUrls: ['./patient-dashboard-doctor.component.css']
})
export class PatientDashboardDoctorComponent implements OnInit {

  rendezvous = []
  constructor(
    private docteurservice:DocteurService,
    private activateroute:ActivatedRoute,

  ) { }

  ngOnInit(): void {

    let  id=this.activateroute.parent.snapshot.paramMap.get('id');
    this.getAllRendezVous(id);
  }

  getAllRendezVous(id){
  this.docteurservice.getDoctorAllRendezVous(id).subscribe((rendezvous)=>{ 
   this.rendezvous = rendezvous['data'] ;
   console.log(this.rendezvous);
   console.log(rendezvous);
   
}) 
  }

}
