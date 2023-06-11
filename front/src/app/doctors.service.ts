import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateDoctor, Doctor } from './doctor';
import { Observable } from 'rxjs';
import { Treatment } from './treatment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  // todo env var
  private url = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) {}

  createDoctor(doctor: CreateDoctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.url, doctor);
  }

  editDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.url}/${doctor._id}`, doctor);
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.url);
  }

  getDoctor(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.url}/${id}`);
  }

  getDoctorPatients(id: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.url}/${id}/patients`);
  }

  getDoctorTreatment(id: string): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.url}/${id}/treatments`);
  }

  deleteDoctor(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
