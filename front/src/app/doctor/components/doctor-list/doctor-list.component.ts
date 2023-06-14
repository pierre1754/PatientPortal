import { Component } from '@angular/core';
import { Doctor } from 'src/types/doctor';
import { DoctorsService } from '../../services/doctors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent {
  displayedColumns: string[] = ['name', 'profession', 'actions'];
  doctors: Doctor[] = [];

  constructor(private doctorsService: DoctorsService, private router: Router) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  async createDoctor() {
    await this.router.navigate(['/doctors/add']);
  }

  getDoctorDetail(id: string) {
    this.router.navigate([`/doctors/detail/${id}`]);
  }

  deleteDoctor(id: string) {
    this.doctorsService.deleteDoctor(id).subscribe(() => {
      this.getDoctors();
    });
  }
}
