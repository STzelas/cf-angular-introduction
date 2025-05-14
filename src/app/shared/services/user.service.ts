import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user';
import { Credentials } from '../interfaces/auth';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  loginUser(credentials: Credentials) {
    return this.http.post<{status: boolean, data: string}>(`${API_URL_AUTH}/login`, credentials)
  }

  registerUser(user: User) {
    return this.http.post<{status: boolean}>(`${API_URL}`, user)
  }

  check_duplicate_email(email: string) {
    return this.http.get<{status: boolean}>(`${API_URL}/check_duplicate_email/${email}`)
  }

  check_duplicate_username(username: string) {
    return this.http.get<{status: boolean}>(`${API_URL}/check_duplicate_username/${username}`)
  }


}
