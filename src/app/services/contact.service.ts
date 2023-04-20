import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'https://formspree.io/f/xwkjalep';

  constructor(private http: HttpClient) {}

  public sendEmail(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
