import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeLogin } from '../enum/type-login';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeFormService } from '../service/change-form.service';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { saveParam } from '../../../helpers/local-storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  // @Output() onChangeForm: EventEmitter<TypeLogin.login|TypeLogin.register> = new EventEmitter();

  public formParent: FormGroup = new FormGroup({});

  public typeLogin = TypeLogin
  public type: TypeLogin.password | TypeLogin.text = TypeLogin.password;

  public _changeFormServive = inject(ChangeFormService);
  private _authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
      this.initFormParent();
  }

  showPassword(){
    this.type = this.type === TypeLogin.password ? TypeLogin.text : TypeLogin.password;
  }

  initFormParent(){
    this.formParent = new FormGroup({
      email: new FormControl('user@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('12345', [Validators.required])
    });
  }

  changeForm(){
    this._changeFormServive.$typeForm.next(TypeLogin.register);
  }

  handleSubmit(){
    this._authService.login(this.formParent.value).subscribe({
      next: response => {
        saveParam(response.message);
      },
      error: error =>{
        console.log(error);
      },
      complete: () => {
        this.router.navigate(['product']);
      }
    });
  }

}
