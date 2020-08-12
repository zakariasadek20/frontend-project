import { DocteurService } from './../../services/docteur.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private docteurService: DocteurService) { }
  ngOnInit(): void {

    /* api pour capter la location */
    this.type = this.route.snapshot.queryParamMap.get('type');
    if (this.type == 'distance') {
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
      )
    }

  }

  /* metode de location  */
  getUserLocation() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }


}
