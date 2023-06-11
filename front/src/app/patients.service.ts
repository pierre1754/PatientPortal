import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePatient, Patient } from './patient';
import { Observable } from 'rxjs';
import { Treatment } from './treatment';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  // todo env var
  private url = 'http://localhost:3000/patients';

  constructor(private http: HttpClient) {}

  createPatient(patient: CreatePatient): Observable<Patient> {
    return this.http.post<Patient>(this.url, patient);
  }

  editPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.url}/${patient._id}`, patient);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`);
  }

  getPatientTreatment(id: string): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.url}/${id}/treatments`);
  }

  deletePatient(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
