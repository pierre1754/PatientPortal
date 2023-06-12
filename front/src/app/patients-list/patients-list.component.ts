import { Component } from '@angular/core';
import { Patient } from 'src/types/patient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent {
  patients: Patient[] = [];

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientsService.getPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
}
