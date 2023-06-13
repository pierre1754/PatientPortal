import { Component } from '@angular/core';
import { Patient } from 'src/types/patient';
import { PatientsService } from '../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent {
  displayedColumns: string[] = ['name', 'adress', 'phone', 'email', 'options'];
  patients: Patient[] = [];

  constructor(
    private patientsService: PatientsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientsService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  async createPatient() {
    await this.router.navigate(['/new-patient']);
  }

  async getPatientDetail(id: string) {
    await this.router.navigate([`/detail-patient/${id}`]);
  }

  async editPatient(id: string) {
    await this.router.navigate([`/edit-patient/${id}`]);
  }

  deletePatient(id: string) {
    this.patientsService.deletePatient(id).subscribe(() => {
      this.getPatients();
    });
  }
}