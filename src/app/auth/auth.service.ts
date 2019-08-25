import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(pin: string) {
    return this.http.post<any>(
      'https://frontend-challenge.screencloud-michael.now.sh/api/pin/',
      {
        pin
      }
    );
  }
}
