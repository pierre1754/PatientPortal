import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTreatment, Treatment } from './treatment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  // todo env var
  private url = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) {}

  createTreatment(treatment: CreateTreatment): Observable<Treatment> {
    return this.http.post<Treatment>(this.url, treatment);
  }

  editTreatment(treatment: Treatment): Observable<Treatment> {
    return this.http.put<Treatment>(`${this.url}/${treatment._id}`, treatment);
  }

  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.url);
  }

  getTreatment(id: string): Observable<Treatment> {
    return this.http.get<Treatment>(`${this.url}/${id}`);
  }

  deleteTreatment(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`);
  }
}
