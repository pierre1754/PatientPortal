import { Component } from '@angular/core';
import { Doctor } from 'src/app/types/doctor';
import { DoctorsService } from '../../services/doctors.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TreatmentsService } from 'src/app/treatment/services/treatments.service';
import { PatientsService } from 'src/app/patient/services/patients.service';
import { Patient } from 'src/app/types/patient';
import { Treatment } from 'src/app/types/treatment';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css'],
})
export class DoctorDetailComponent {
  doctor: Doctor = {
    _id: '',
    name: '',
    profession: '',
  };
  patients: Patient[] = [];
  treatments: Treatment[] = [];

  constructor(
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private treatmentsService: TreatmentsService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.doctor._id = this.activeRoute.snapshot.paramMap.get('id') ?? '';

    this.getDoctor();
    this.getDoctorPatients();
    this.getDoctorTreatments();
  }

  getDoctor() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (!id) return console.error('No id provided');

    this.doctorsService.getDoctor(id).subscribe((doctor) => {
      this.doctor = doctor;
    });
  }

  getDoctorPatients() {
    return this.doctorsService
      .getDoctorPatients(this.doctor._id)
      .subscribe((patients) => {
        this.patients = patients;
      });
  }

  getDoctorTreatments() {
    return this.doctorsService
      .getDoctorTreatment(this.doctor._id)
      .subscribe((treatments) => {
        this.treatments = treatments;
      });
  }

  deleteTreatment(id: string) {
    this.treatmentsService.deleteTreatment(id).subscribe(() => {
      this.getDoctorTreatments();
    });
  }

  deletePatient(id: string) {
    this.patientsService.deletePatient(id).subscribe(() => {
      this.getDoctorPatients();
    });
  }

  goBack() {
    this.location.back();
  }
}
