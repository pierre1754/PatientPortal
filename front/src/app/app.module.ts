import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientsListComponent } from './patient/components/patients-list/patients-list.component';
import { PatientDetailComponent } from './patient/components/patient-detail/patient-detail.component';
import { PatientAddComponent } from './patient/components/patient-add/patient-add.component';
import { TreatmentAddComponent } from './treatment/component/treatment-add/treatment-add.component';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PatientEditComponent } from './patient/components/patient-edit/patient-edit.component';
import { PatientFormComponent } from './patient/components/patient-form/patient-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DoctorListComponent } from './doctor/components/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor/components/doctor-add/doctor-add.component';
import { DoctorDetailComponent } from './doctor/components/doctor-detail/doctor-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientDetailComponent,
    PatientEditComponent,
    PatientFormComponent,
    PatientAddComponent,
    TreatmentAddComponent,
    DoctorListComponent,
    DoctorAddComponent,
    DoctorDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
