import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationType } from '../models/LocationType';

@Injectable({
  providedIn: 'root',
})
export class LocationTypeService {
  private url = 'location-type';
  constructor(private http: HttpClient) {}

  public getAllLocationTypes(): Observable<LocationType[]> {
    return this.http.get<LocationType[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleLocationType(
    locationType: LocationType
  ): Observable<LocationType> {
    return this.http.get<LocationType>(
      `${environment.apiUrl}/${this.url}/${locationType.id}`
    );
  }
}
