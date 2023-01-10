import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Element } from '../models/Element';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  private url = 'element';
  constructor(private http: HttpClient) {}

  public GetAllElements(): Observable<Element[]> {
    return this.http.get<Element[]>(`${environment.apiUrl}/${this.url}`);
  }

  public GetSingleElement(element: Element): Observable<Element> {
    return this.http.get<Element>(
      `${environment.apiUrl}/${this.url}/${element.id}`
    );
  }
}
