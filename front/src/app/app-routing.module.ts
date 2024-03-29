import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsListComponent } from './patient/components/patients-list/patients-list.component';
import { PatientDetailComponent } from './patient/components/patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient/components/patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient/components/patient-add/patient-add.component';
import { TreatmentAddComponent } from './treatment/component/treatment-add/treatment-add.component';
import { DoctorListComponent } from './doctor/components/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctor/components/doctor-add/doctor-add.component';
import { DoctorDetailComponent } from './doctor/components/doctor-detail/doctor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsListComponent },
  { path: 'patients/add', component: PatientAddComponent },
  { path: 'patients/detail/:id', component: PatientDetailComponent },
  { path: 'patients/edit/:id', component: PatientEditComponent },
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/add', component: DoctorAddComponent },
  { path: 'doctors/detail/:id', component: DoctorDetailComponent },
  { path: 'treatments/add/:id', component: TreatmentAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
