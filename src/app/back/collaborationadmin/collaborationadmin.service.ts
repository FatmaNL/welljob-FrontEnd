import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Collaboration } from "src/app/collaboration";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class CollaborationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getCollaborations(): Observable<Collaboration[]> {
    return this.http.get<Collaboration[]>(`${this.apiServerUrl}/collaboration/getallcollaborations`);
  }

  public addCollaboration(collaboration: Collaboration): Observable<Collaboration> {
    return this.http.post<Collaboration>(`${this.apiServerUrl}/collaboration/addcollab`, collaboration);
  }

  public updateCollaboration(collaboration: Collaboration, collaborationId: number): Observable<Collaboration> {
    return this.http.put<Collaboration>(`${this.apiServerUrl}/collaboration/updatecollaboration/${collaborationId}`, collaboration);
  }

  public deleteCollaboration(collaborationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/collaboration/deletecollaboration/${collaborationId}`);
  }
  
}