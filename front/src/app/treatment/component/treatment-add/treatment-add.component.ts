import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../../../doctor/services/doctors.service';
import { TreatmentsService } from '../../services/treatments.service';
import { Doctor } from 'src/app/types/doctor';
import { CreateTreatment } from 'src/app/types/treatment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-treatment-add',
  templateUrl: './treatment-add.component.html',
  styleUrls: ['./treatment-add.component.css'],
})
export class TreatmentAddComponent {
  doctors: Doctor[] = [];
  treatment: CreateTreatment = {
    treatment: '',
    patient: '',
    doctor: '',
  };

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorsService,
    private treatmentService: TreatmentsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  async addTreatment() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.treatmentService
      .createTreatment({
        ...this.treatment,
        patient: id ?? '',
      })
      .subscribe(() => {
        this.goBack();
      });
  }

  goBack() {
    this.location.back();
  }
}
