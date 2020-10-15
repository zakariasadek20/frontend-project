import { PatientDashboardDoctorComponent } from './components/dashboards/doctor/patient-dashboard-doctor/patient-dashboard-doctor.component';
import { DashboardDoctorComponent } from './components/dashboards/doctor/dashboard-doctor/dashboard-doctor.component';
import { LayoutDashboardDoctorComponent } from './components/dashboards/doctor/layout-dashboard-doctor/layout-dashboard-doctor.component';
import { CheckoutDoctorComponent } from './components/checkout-doctor/checkout-doctor.component';
import { BookingDoctorComponent } from './components/booking-doctor/booking-doctor.component';
import { ProfileDoctorComponent } from './components/profile-doctor/profile-doctor.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/partials/home/home.component';
import { AppointmentDashboardDoctorComponent } from './components/dashboards/doctor/appointment-dashboard-doctor/appointment-dashboard-doctor.component';

/* les routes dyal page dyalna  */
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'docteur',
    children: [
      { path: 'search', component: SearchDoctorComponent },
      { path: ':id/booking', component: BookingDoctorComponent },
      { path: ':id', component: ProfileDoctorComponent },
      { path: ':id/checkout', component: CheckoutDoctorComponent },
      {
        path: ':id/dashboard',
        component: LayoutDashboardDoctorComponent,
        children: [
          { path: '', component: DashboardDoctorComponent },
          { path: 'appointments', component: AppointmentDashboardDoctorComponent },
          {path:'patients',component: PatientDashboardDoctorComponent }
      ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
