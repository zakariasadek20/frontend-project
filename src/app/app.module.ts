import { LayoutDashboardDoctorComponent } from './components/dashboards/doctor/layout-dashboard-doctor/layout-dashboard-doctor.component';
import { DocteurService } from './services/docteur.service';
import { HomeComponent } from './components/partials/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaoderComponent } from './components/partials/laoder/laoder.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import * as Sentry from "@sentry/browser";
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeClinicSpecialitiesComponent } from './components/home-clinic-specialities/home-clinic-specialities.component';
import { HomeBookDoctorComponent } from './components/home-book-doctor/home-book-doctor.component';
import { HomeAvailableFeaturesComponent } from './components/home-available-features/home-available-features.component';
import { HomeBlogSectionComponent } from './components/home-blog-section/home-blog-section.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfileDoctorComponent } from './components/profile-doctor/profile-doctor.component';
import { BookingDoctorComponent } from './components/booking-doctor/booking-doctor.component';
import { AgmCoreModule } from '@agm/core';
import { DatePipe } from '@angular/common';
import { CheckoutDoctorComponent } from './components/checkout-doctor/checkout-doctor.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DashboardDoctorComponent } from './components/dashboards/doctor/dashboard-doctor/dashboard-doctor.component';
import { AppointmentDashboardDoctorComponent } from './components/dashboards/doctor/appointment-dashboard-doctor/appointment-dashboard-doctor.component';
import { ModalAppointmentDashboardDoctorComponent } from './components/dashboards/doctor/modal-appointment-dashboard-doctor/modal-appointment-dashboard-doctor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarDashboardDoctorComponent } from './components/dashboards/doctor/sidebar-dashboard-doctor/sidebar-dashboard-doctor.component';
import { PatientDashboardDoctorComponent } from './components/dashboards/doctor/patient-dashboard-doctor/patient-dashboard-doctor.component';
import { ScheduleTimingsDashboardDoctorComponent } from './components/dashboards/doctor/schedule-timings-dashboard-doctor/schedule-timings-dashboard-doctor.component';
import { ModalAddTimeSlotsDashboardDoctorComponent } from './components/dashboards/doctor/modal-add-time-slots-dashboard-doctor/modal-add-time-slots-dashboard-doctor.component';

Sentry.init({
  dsn: "https://f9c730986abe4b5db39f20d6ce29e3a1@o381431.ingest.sentry.io/5378176",
  // TryCatch has to be configured to disable XMLHttpRequest wrapping, as we are going to handle
  // http module exceptions manually in Angular's ErrorHandler and we don't want it to capture the same error twice.
  // Please note that TryCatch configuration requires at least @sentry/browser v5.16.0.
  integrations: [new Sentry.Integrations.TryCatch({
    XMLHttpRequest: false,
  })],
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }

  extractError(error) {
    // Try to unwrap zone.js error.
    // https://github.com/angular/angular/blob/master/packages/core/src/util/errors.ts
    if (error && error.ngOriginalError) {
      error = error.ngOriginalError;
    }

    // We can handle messages and Error objects directly.
    if (typeof error === "string" || error instanceof Error) {
      return error;
    }

    // If it's http module error, extract as much information from it as we can.
    if (error instanceof HttpErrorResponse) {
      // The `error` property of http exception can be either an `Error` object, which we can use directly...
      if (error.error instanceof Error) {
        return error.error;
      }

      // ... or an`ErrorEvent`, which can provide us with the message but no stack...
      if (error.error instanceof ErrorEvent) {
        return error.error.message;
      }

      // ...or the request body itself, which we can use as a message instead.
      if (typeof error.error === "string") {
        return `Server returned code ${error.status} with body "${error.error}"`;
      }

      // If we don't have any detailed information, fallback to the request message itself.
      return error.message;
    }

    // Skip if there's no error, and let user decide what to do with it.
    return null;
  }

  handleError(error) {
    const extractedError = this.extractError(error) || "Handled unknown error";

    // Capture handled exception and send it to Sentry.
    const eventId = Sentry.captureException(extractedError);

    // When in development mode, log the error to console for immediate feedback.
    if (!environment.production) {
      console.error(extractedError);
    }

    // Optionally show user dialog to provide details on what happened.
    Sentry.showReportDialog({ eventId });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LaoderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeSearchComponent,
    HomeClinicSpecialitiesComponent,
    HomeBookDoctorComponent,
    HomeAvailableFeaturesComponent,
    HomeBlogSectionComponent,
    SearchDoctorComponent,
    ProfileDoctorComponent,
    BookingDoctorComponent,
    CheckoutDoctorComponent,
    LayoutDashboardDoctorComponent,
    DashboardDoctorComponent,
    AppointmentDashboardDoctorComponent,
    ModalAppointmentDashboardDoctorComponent,
    SidebarDashboardDoctorComponent,
    PatientDashboardDoctorComponent,
    ScheduleTimingsDashboardDoctorComponent,
    ModalAddTimeSlotsDashboardDoctorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZQV0uGGIaHm8G2XjdW_kI5ST4mzFJ1qs'
    })
    ,
    NgCircleProgressModule.forRoot({
      "radius": 39,
      "space": -6,
      "outerStrokeWidth": 6,
      "innerStrokeWidth": 6,
      "innerStrokeColor": "#e7e8ea",
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showImage": true,
      "showBackground": false,
      "showInnerStroke":true,
      "clockwise": false,
      "startFromZero": true,
      "lazy": true}),
    NgbModule,

  ],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }, DatePipe,DocteurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
