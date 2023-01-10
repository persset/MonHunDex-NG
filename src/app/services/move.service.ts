import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moves } from '../models/Move';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  private url = 'move';
  constructor(private http: HttpClient) {}

  public getAllMoves(): Observable<Moves[]> {
    return this.http.get<Moves[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleMove(move: Moves): Observable<Moves> {
    return this.http.get<Moves>(`${environment.apiUrl}/${this.url}/${move.id}`);
  }
}
