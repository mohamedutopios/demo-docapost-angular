import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Useer } from '../interfaces/useer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Useer[]> {
    return this.http.get<Useer[]>(this.apiUrl);
  }

  createUser(user: Useer): Observable<Useer> {
    return this.http.post<Useer>(this.apiUrl, user);
  }

  getUserById(id: number): Observable<Useer> {
    return this.http.get<Useer>(`${this.apiUrl}/${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateUser(user: Useer): Observable<Useer> {
    return this.http.put<Useer>(`${this.apiUrl}/${user.id}`, user);
  }


}
