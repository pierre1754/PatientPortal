import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { TreatmentAddComponent } from './treatment-add/treatment-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/patient-list', pathMatch: 'full' },
  { path: 'patient-list', component: PatientsListComponent },
  { path: 'detail-patient/:id', component: PatientDetailComponent },
  { path: 'edit-patient/:id', component: PatientEditComponent },
  { path: 'new-patient', component: PatientAddComponent },
  { path: 'add-treatment/:id', component: TreatmentAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
