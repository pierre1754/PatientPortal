import { Component } from '@angular/core';
import { Patient } from 'src/app/types/patient';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
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
    await this.router.navigate(['patients/add']);
  }

  async getPatientDetail(id: string) {
    await this.router.navigate([`/patients/detail/${id}`]);
  }

  async editPatient(id: string) {
    await this.router.navigate([`/patients/edit/${id}`]);
  }

  deletePatient(id: string) {
    this.patientsService.deletePatient(id).subscribe(() => {
      this.getPatients();
    });
  }
}
