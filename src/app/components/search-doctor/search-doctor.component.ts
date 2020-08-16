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

  // array in which we receive the list of doctors
  docteurs: any = [];

  // array in which we receive the list of specialities
  specialities: any = [];

  // array in which we receive the id of specialitie seledcted
  SelectedSpesialites = [];

  // queryParam type of search "ville","distance"
  type: string;

  // we store latitude of user
  latitude;

  // we store longitude of user
  longitude;

  // we store zone of search
  zone = 1; // 1km

  // ueryParam villeName if 'type' == 'ville'
  villeName: string;

  page=1

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/script.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  constructor(private route: ActivatedRoute,
              private docteurService: DocteurService,
              private specialieService: SpecialitieService) {
    this.latitude = localStorage.getItem('latitude');
    this.longitude = localStorage.getItem('longitude');
    this.loadScripts();

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
    });

  }

  getBySpecialitie(event, idSpecialite) {
    const isChecked: boolean = event.target.checked;

    //verify if isChecked === true
    if (isChecked) {
      this.SelectedSpesialites = [...this.SelectedSpesialites, idSpecialite];
    } else {
      this.SelectedSpesialites = this.SelectedSpesialites.filter((id) => id !== idSpecialite);
    }

    //check if length of SelectedSpesialites[] > 0 that means there are selected specialties
    if (this.SelectedSpesialites.length > 0) {
      this.docteurService.getByspecialiti(this.SelectedSpesialites).subscribe((docteurs) => {
        this.docteurs = docteurs['data'];
        // console.log(docteurs);
      });
    }
    else {
      this.docteurs = [];
    }

  }
  pageChanged(event,card:HTMLElement) {
    // window.anchorScroll();
    this.page = event;
    card.scrollIntoView();

  }
}
