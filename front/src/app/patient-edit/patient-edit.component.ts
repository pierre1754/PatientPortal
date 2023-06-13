import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/types/patient';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from 'src/types/doctor';

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
    private doctorService: DoctorsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPatient();
    this.getDoctors();
  }

  async goBack() {
    await this.router.navigate(['/patient-list']);
  }

  getPatient() {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id ?? '').subscribe((patient) => {
      this.patient = patient;
    });
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
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