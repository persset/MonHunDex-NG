import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  private url = 'Monster';
  constructor(private http: HttpClient) {}

  public getAllMonsters(): Observable<Monster[]> {}
}
