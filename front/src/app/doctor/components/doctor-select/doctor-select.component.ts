import { Component, Input } from '@angular/core';
import { Doctor } from 'src/types/doctor';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctor-select',
  templateUrl: './doctor-select.component.html',
  styleUrls: ['./doctor-select.component.css'],
})
export class DoctorSelectComponent {
  @Input() doctor: string = '';

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
}
