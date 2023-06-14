import { Component } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/types/patient';
import { Location } from '@angular/common';
import { Doctor } from 'src/app/types/doctor';
import { DoctorsService } from 'src/app/doctor/services/doctors.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css'],
})
export class PatientEditComponent {
  patient: Patient = {
    _id: '',
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
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private doctorsService: DoctorsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPatient();
    this.getDoctors();
  }

  goBack() {
    this.location.back();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  getPatient() {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id ?? '').subscribe((patient) => {
      this.patient = patient;
    });
  }

  async editPatient() {
    this.patientService.editPatient(this.patient).subscribe(() => {
      this.goBack();
    });
  }

  async deletePatient() {
    this.patientService.deletePatient(this.patient._id).subscribe(() => {
      this.goBack();
    });
  }
}
