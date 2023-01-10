import { HttpClient } from '@angular/common/http';
import { Location } from '../models/Location';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url = 'location';
  constructor(private http: HttpClient) {}

  public getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleLocation(location: Location): Observable<Location> {
    return this.http.get<Location>(
      `${environment.apiUrl}/${this.url}/${location.id}`
    );
  }
}
