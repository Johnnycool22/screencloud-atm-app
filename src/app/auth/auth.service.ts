import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  currentBalance: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  signin(pin: string) {
    return this.http.post<AuthResponseData>(
      'https://frontend-challenge.screencloud-michael.now.sh/api/pin/',
      {
        pin: ('{pin}')
      }
    );
  }
}
