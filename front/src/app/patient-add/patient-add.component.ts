import { Component, SimpleChanges } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Router } from '@angular/router';
import { Patient } from 'src/types/patient';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from 'src/types/doctor';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
})
export class PatientAddComponent {
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
    private patientService: PatientsService,
    private doctorService: DoctorsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDoctors();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['patient']) {
      console.log('Input value changed:', changes['patient'].currentValue);
    }
  }

  async goBack() {
    await this.router.navigate(['/patients']);
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  async addPatient() {
    this.patientService.createPatient(this.patient).subscribe(() => {
      this.goBack();
    });
  }
}
