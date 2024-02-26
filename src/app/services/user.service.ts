import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserResults } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/v1/users';

  constructor(private http: HttpClient) { }

  getUsers(accessToken: string | null): Observable<UserResults> {
    console.log("token:", accessToken)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    return this.http.get<UserResults>(this.apiUrl, { headers });
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  createUser(accessToken: string | null, user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(accessToken: string | null, user: User): Observable<User> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  deleteUser(accessToken: string | null, id: String): Observable<void> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, { headers });
  }
}
