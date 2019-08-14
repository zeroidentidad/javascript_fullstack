import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  all() {
    console.log(`${AppConfig.apiUrl}/user`);
    return this.http.get<User[]>(`${AppConfig.apiUrl}/user`);
  }

  me() {
    console.log(`${AppConfig.apiUrl}/user/me`);
    return this.http.get<User>(`${AppConfig.apiUrl}/user/me`);
  }
}
