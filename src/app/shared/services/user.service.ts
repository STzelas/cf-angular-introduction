import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { LoggedInUser, User } from '../interfaces/user';
import { Credentials } from '../interfaces/auth';
import { Router } from '@angular/router';

const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)
  router = inject(Router)

  user$ = signal<LoggedInUser | null>(null)

  constructor() {
    effect(() => {
      if (this.user$()) {
        console.log('User Logged in', this.user$()?.username)
      } else {
        console.log('No user logged in')
      }
    })
  }

  loginUser(credentials: Credentials) {
    return this.http.post<{status: boolean, data: string}>(`${API_URL_AUTH}/login`, credentials)
  }

  logoutUser() {
    this.user$.set(null)
    localStorage.removeItem('access_token')
    this.router.navigate(['user-login'])
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
