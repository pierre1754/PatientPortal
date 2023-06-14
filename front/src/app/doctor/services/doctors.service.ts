import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Patient } from '../../../types/patient';
import { CreateDoctor, Doctor } from 'src/types/doctor';
import { Treatment } from 'src/types/treatment';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private url = 'http://localhost:3000/doctors';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  createDoctor(doctor: CreateDoctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.url, doctor, this.httpOptions).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  editDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http
      .put<Doctor>(`${this.url}/${doctor._id}`, doctor, this.httpOptions)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.url).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getDoctor(id: string): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getDoctorPatients(id: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.url}/${id}/patients`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getDoctorTreatment(id: string): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.url}/${id}/treatments`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  deleteDoctor(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }
}
