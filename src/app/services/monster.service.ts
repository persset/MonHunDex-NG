import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monster } from '../models/monster';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private url = 'monster';
  constructor(private http: HttpClient) {}

  public getAllMonsters(): Observable<Monster[]> {
    return this.http.get<Monster[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleMonster(monster: Monster): Observable<Monster> {
    return this.http.get<Monster>(
      `${environment.apiUrl}/${this.url}/${monster.id}`
    );
  }
}
