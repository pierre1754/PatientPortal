import { Component } from '@angular/core';
import { Doctor } from 'src/types/doctor';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  displayedColumns: string[] = ['name', 'profession', 'actions'];
  doctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  createDoctor() {
    this.doctorsService
      .createDoctor({ name: '', profession: '' })
      .subscribe(() => {
        this.getDoctors();
      });
  }

  deleteDoctor(id: string) {
    this.doctorsService.deleteDoctor(id).subscribe(() => {
      this.getDoctors();
    });
  }
}
