import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MonsterClass } from '../models/MonsterClass';

@Injectable({
  providedIn: 'root',
})
export class MonsterClassService {
  private url = 'monsterClass';
  constructor(private http: HttpClient) {}

  public getAllMonsterClasses(): Observable<MonsterClass[]> {
    return this.http.get<MonsterClass[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleMonsterClass(
    monsterClass: MonsterClass
  ): Observable<MonsterClass> {
    return this.http.get<MonsterClass>(
      `${environment.apiUrl}/${this.url}/${monsterClass.id}`
    );
  }
}
