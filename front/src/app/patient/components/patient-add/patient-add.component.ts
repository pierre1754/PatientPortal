import { Component } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { Router } from '@angular/router';
import { CreatePatient } from 'src/types/patient';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
})
export class PatientAddComponent {
  patient: CreatePatient = {
    name: '',
    age: 0,
    gender: '',
    adress: '',
    phone: '',
    email: '',
    bloodGroup: '',
    weight: 0,
    height: 0,
    doctor: '',
  };

  constructor(
    private patientService: PatientsService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }

  async addPatient() {
    console.log(this.patient);

    this.patientService.createPatient(this.patient).subscribe(() => {
      this.goBack();
    });
  }
}
