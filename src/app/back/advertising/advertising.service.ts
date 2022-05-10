import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Advertising } from "src/app/advertising";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class AdvertisingService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getAdvertisings(): Observable<Advertising[]> {
    return this.http.get<Advertising[]>(`${this.apiServerUrl}/advertising/getalladvertisings`);
  }

  public addAdvertising(advertising: Advertising): Observable<Advertising> {
    return this.http.post<Advertising>(`${this.apiServerUrl}/advertising/addadvertising`, advertising);
  }

  public updateAdvertising(advertising: Advertising, AdvertisingId: number): Observable<Advertising> {
    return this.http.put<Advertising>(`${this.apiServerUrl}/advertising/updateadvertising/${AdvertisingId}`, advertising);
  }

  public deleteAdvertising(advertisingId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/advertising/deleteadvertising/${advertisingId}`);
  }
}