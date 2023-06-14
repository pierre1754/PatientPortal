import { Component } from '@angular/core';
import { CreateDoctor } from 'src/types/doctor';
import { DoctorsService } from '../../services/doctors.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css'],
})
export class DoctorAddComponent {
  doctor: CreateDoctor = {
    name: '',
    profession: '',
  };

  constructor(
    private doctorsService: DoctorsService,
    private location: Location
  ) {}

  async addDoctor() {
    this.doctorsService.createDoctor(this.doctor).subscribe(() => {
      this.goBack();
    });
  }

  goBack() {
    this.location.back();
  }
}
