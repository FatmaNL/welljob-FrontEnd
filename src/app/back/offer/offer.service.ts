import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offer } from "src/app/offer";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class OfferService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiServerUrl}/offre/getalloffres`);
  }

  public addOffer(Offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiServerUrl}/offre/addoffre`, Offer);
  }

  public updateOffer(offer: Offer, OfferId: number): Observable<Offer> {
    return this.http.put<Offer>(`${this.apiServerUrl}/offre/updateoffre/${OfferId}`, offer);
  }

  public deleteOffer(OfferId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/offre/deleteoffre/${OfferId}`);
  }
}