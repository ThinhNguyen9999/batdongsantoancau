import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = ""

constructor(private _httpClient: HttpClient) { }

  sendMessage(body: any) {
    return this._httpClient.post('http://localhost:3000/sendmail', body);
  }
}
