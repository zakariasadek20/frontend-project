import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  searchForm = new FormGroup({
    location: new FormControl('', [Validators.minLength(4)]),
    search: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  /* verifier wach dak champs khlah khwai ola 3amer */
  /* ila kane khawi ti sefto localisation // ila kane 3amer tisefto la ville li kteb  */
  search() {
    let index = this.searchForm.value.location.length;
    let type: string = index == 0 ? 'distance' : 'ville';
    if (type == 'ville') {
      //search by ville
      this.router.navigate(['/docteur/search'], { queryParams: { type: type, ville: this.searchForm.value.location ,skipLocationChange: true} });
    } else {
      //search by distance
      this.router.navigate(['/docteur/search'], { queryParams: { type: type } ,skipLocationChange: true});
    }
  }

}
