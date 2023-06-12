import { Component } from '@angular/core';
import { Patient } from 'src/types/patient';
import { PatientsService } from '../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent {
  patient: Patient | undefined;

  constructor(
    private route: ActivatedRoute,
    private patientsService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    const id = this.route.snapshot.paramMap.get('id');
    this.patientsService.getPatient(id ?? '').subscribe((patient) => {
      this.patient = patient;
    });
  }

  async goBack() {
    await this.router.navigate(['/patients']);
  }
}
