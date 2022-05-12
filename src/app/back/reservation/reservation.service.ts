import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from 'src/app/reservation';

@Injectable({providedIn: 'root'})
export class ReservationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiServerUrl}/reservation/reservationslist`);
  }

  public addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiServerUrl}/reservation/add`, reservation);
  }

  public updateReservation(reservation: Reservation, reservationId: number): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiServerUrl}/reservation/updatereservation/${reservationId}`, reservation);
  }

  public deleteReservation(reservationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/reservation/deletereservation/${reservationId}`);
  }
  
  public exportReservation(): Observable<Blob> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get<Blob>(`${this.apiServerUrl}/reservation/export/pdf`, { headers: headers, responseType: 'blob' as 'json' });
  }

}