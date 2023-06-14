import { Component } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { Router } from '@angular/router';
import { CreatePatient } from 'src/app/types/patient';
import { Location } from '@angular/common';
import { Doctor } from 'src/app/types/doctor';
import { DoctorsService } from 'src/app/doctor/services/doctors.service';

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

  doctors: Doctor[] = [];

  constructor(
    private patientService: PatientsService,
    private doctorsService: DoctorsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

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
