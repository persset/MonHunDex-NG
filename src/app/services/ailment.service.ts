import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ailment } from '../models/Ailment';

@Injectable({
  providedIn: 'root',
})
export class AilmentService {
  private url = 'ailment';
  constructor(private http: HttpClient) {}

  public GetAllAilments(): Observable<Ailment[]> {
    return this.http.get<Ailment[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleAilment(ailment: Ailment): Observable<Ailment> {
    return this.http.get<Ailment>(
      `${environment.apiUrl}/${this.url}/${ailment.id}`
    );
  }
}
