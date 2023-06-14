import { Component } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/types/patient';
import { Location } from '@angular/common';

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

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPatient();
  }

  goBack() {
    this.location.back();
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
