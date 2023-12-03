// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8085'; // Mettez l'URL de votre backend Spring Boot

  constructor(private http: HttpClient) {}

  getHelloMessage(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/getMsg`);
  }
}
