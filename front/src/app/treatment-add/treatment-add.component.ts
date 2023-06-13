import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../services/doctors.service';
import { TreatmentsService } from '../services/treatments.service';
import { Doctor } from 'src/types/doctor';
import { CreateTreatment } from 'src/types/treatment';

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
    private router: Router
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

  async goBack() {
    await this.router.navigate([
      '/detail-patient',
      this.route.snapshot.paramMap.get('id') ?? '',
    ]);
  }
}
