import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MonsterTitle } from '../models/MonsterTitle';

@Injectable({
  providedIn: 'root',
})
export class MonsterTitleService {
  private url = 'monsterTitle';
  constructor(private http: HttpClient) {}

  public getAllMonsterTitles(): Observable<MonsterTitle[]> {
    return this.http.get<MonsterTitle[]>(`${environment.apiUrl}/${this.url}`);
  }

  public getSingleMonsterTitle(
    monsterTitle: MonsterTitle
  ): Observable<MonsterTitle> {
    return this.http.get<MonsterTitle>(
      `${environment.apiUrl}/${this.url}/${monsterTitle.id}`
    );
  }
}
