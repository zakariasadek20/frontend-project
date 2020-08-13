import { SpecialitieService } from './../../services/specialitie.service';
import { DocteurService } from './../../services/docteur.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specialitie } from 'src/app/Models/specialitie';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})

export class SearchDoctorComponent implements OnInit {

  docteurs: any = [];
  type: string;
  latitude;
  longitude;
  zone = 1;//1km
  villeName: string;

  specialities: any = [];

  constructor(private route: ActivatedRoute,
    private docteurService: DocteurService,
    private specialieService: SpecialitieService) {
    this.latitude = localStorage.getItem('latitude');
    this.longitude = localStorage.getItem('longitude');
  }
  ngOnInit(): void {

    /* api pour capter la location */
    this.type = this.route.snapshot.queryParamMap.get('type');
    if (this.type === 'distance') {
      this.getUserLocation();

      this.docteurService.getByDistance(this.latitude, this.longitude, this.zone).subscribe(
        (docteurs) => {
          this.docteurs = docteurs['data'];
        }
      );
    }
    else {
      this.villeName = this.route.snapshot.queryParamMap.get('ville');
      this.docteurService.getByVille(this.villeName).subscribe((docteurs) => {
        this.docteurs = docteurs['data'];

      }
      );
    }


    /* load specialities */
    this.getAllSpecialiti();


  }

  /* metode de location  */
  getUserLocation() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      localStorage.setItem('latitude', lat.toString());
      localStorage.setItem('longitude', long.toString());
    });
  }

/* njibo specilalities mn backend */
  getAllSpecialiti() {
    this.specialieService.getall().subscribe((specialities) => {
      this.specialities = specialities['data'];
    }

    )

  }
SelectedSpesialites:Array<Specialitie>=[];

  getBySpecialitie(event,idSpecialite){
    let isChecked : boolean= event.target.checked;
    if (isChecked){
      this.SelectedSpesialites.push({id:idSpecialite});
      this.docteurService.getByspecialiti(this.SelectedSpesialites).subscribe((docteurs)=> {
        this.docteurs = docteurs['data'];
        console.log(docteurs);

      })

    }

  }

}
