import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any[]> {
    return this.http
      .get<{ data: any[] }>('https://reqres.in/api/users?page=1')
      .pipe(map((response) => response.data));
  }

  getSingleUser(id: string): Observable<any> {
    return this.http
      .get<{ data: any }>(`https://reqres.in/api/users/${id}`)
      .pipe(map((response) => response.data));
  }
}
