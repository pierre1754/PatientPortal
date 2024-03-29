import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { CreatePatient, Patient } from 'src/app/types/patient';
import { CreateTreatment, Treatment } from 'src/app/types/treatment';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private url = 'http://localhost:3000/patients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  createPatient(patient: CreatePatient): Observable<Patient> {
    return this.http.post<Patient>(this.url, patient, this.httpOptions).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  editPatient(patient: Patient): Observable<Patient> {
    return this.http
      .put<Patient>(`${this.url}/${patient._id}`, patient, this.httpOptions)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getPatient(id: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  createPatientTreatment(
    id: string,
    treatment: CreateTreatment
  ): Observable<Treatment> {
    return this.http
      .post<Treatment>(
        `${this.url}/${id}/treatments`,
        treatment,
        this.httpOptions
      )
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  getPatientTreatment(id: string): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(`${this.url}/${id}/treatments`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  deletePatient(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }
}
