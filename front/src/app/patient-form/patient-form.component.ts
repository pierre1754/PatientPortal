import { Component, Input } from '@angular/core';
import { Doctor } from 'src/types/doctor';
import { CreatePatient } from 'src/types/patient';

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
    bloodGroup: '',
    weight: 0,
    height: 0,
    doctor: '',
  };

  @Input() doctors: Doctor[] = [];
}
