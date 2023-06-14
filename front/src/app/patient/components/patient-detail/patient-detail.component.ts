import { Component } from '@angular/core';
import { Patient } from 'src/types/patient';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Treatment } from 'src/types/treatment';
import { DoctorsService } from '../../../doctor/services/doctors.service';
import { Doctor } from 'src/types/doctor';
import { TreatmentsService } from '../../../treatment/services/treatments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent {
  patient: Patient | undefined;
  treatments: Treatment[] | undefined;
  doctors: Doctor[] = [];

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    private doctorsService: DoctorsService,
    private treatmentService: TreatmentsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.getPatient();
    this.getDoctors();
  }

  getPatient() {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientsService.getPatient(id ?? '').subscribe((patient) => {
      this.patient = patient;
      this.getPatientTreatment();
    });
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  getPatientTreatment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientsService
      .getPatientTreatment(id ?? '')
      .subscribe((treatments) => {
        this.treatments = treatments;
      });
  }

  getDoctorName(id: string) {
    return this.doctors.find((doctor) => doctor._id === id)?.name;
  }

  async addTreatment() {
    const id = this.route.snapshot.paramMap.get('id');
    await this.router.navigate([`/treatments/add/${id}`]);
  }

  deleteTreatment(id: string) {
    this.treatmentService.deleteTreatment(id).subscribe(() => {
      this.getPatientTreatment();
    });
  }

  goBack() {
    this.location.back();
  }
}
