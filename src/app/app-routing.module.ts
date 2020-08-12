import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/partials/home/home.component';

/* les routes dyal page dyalna  */
const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "docteur", children: [
      { path: "search", component: SearchDoctorComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
