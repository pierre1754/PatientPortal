import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/types/doctor';
import { CreatePatient } from 'src/app/types/patient';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent {
  @Input() patient: CreatePatient = {
    name: '',
    age: 0,
    gender: '',
    adress: '',
    phone: '',
    email: '',
    bloodGroup: '',
    weight: 0,
    height: 0,
    doctor: '',
  };

  @Input() doctors: Doctor[] = [];
}
