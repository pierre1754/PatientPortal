import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CreateTreatment, Treatment } from 'src/app/types/treatment';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  private url = 'http://localhost:3000/treatments';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  createTreatment(treatment: CreateTreatment): Observable<Treatment> {
    return this.http
      .post<Treatment>(this.url, treatment, this.httpOptions)
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  editTreatment(treatment: Treatment): Observable<Treatment> {
    return this.http
      .put<Treatment>(
        `${this.url}/${treatment._id}`,
        treatment,
        this.httpOptions
      )
      .pipe(
        catchError((err) => {
          throw err;
        })
      );
  }

  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>(this.url).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  getTreatment(id: string): Observable<Treatment> {
    return this.http.get<Treatment>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }

  deleteTreatment(id: string): Observable<Response> {
    return this.http.delete<Response>(`${this.url}/${id}`).pipe(
      catchError((err) => {
        throw err;
      })
    );
  }
}
