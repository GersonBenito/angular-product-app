import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment as env } from '../../../../environments/environment.development';
import { Login } from '../interface/login.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly userUrl = env.userUrl;

  login(user: Login): Observable<any>{
    return this.http.get<any>(`${this.userUrl}/login?username=${user.email}d&password=${user.password}`);
  }
}
