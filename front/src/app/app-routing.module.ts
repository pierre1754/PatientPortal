import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientAddComponent } from './patient-add/patient-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientsListComponent },
  { path: 'patients/:id', component: PatientDetailComponent },
  { path: 'patients/edit/:id', component: PatientEditComponent },
  { path: 'patients/add', component: PatientAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
