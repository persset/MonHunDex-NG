import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Behavior } from '../models/Behavior';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  private url = 'behavior';
  constructor(private http: HttpClient) {}

  public GetAllBehaviors(): Observable<Behavior[]> {
    return this.http.get<Behavior[]>(`${environment.apiUrl}/${this.url}`);
  }

  public GetSingleBehavior(behavior: Behavior): Observable<Behavior> {
    return this.http.get<Behavior>(
      `${environment.apiUrl}/${this.url}/${behavior.id}`
    );
  }
}
