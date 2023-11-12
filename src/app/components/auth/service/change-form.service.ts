import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TypeLogin } from '../enum/type-login';

@Injectable({
  providedIn: 'root'
})
export class ChangeFormService {
  public $typeForm = new BehaviorSubject<TypeLogin.login | TypeLogin.register>(TypeLogin.login);
}
