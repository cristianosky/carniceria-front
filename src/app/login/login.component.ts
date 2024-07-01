import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceLoginService } from '../services/login/service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  isLoading: boolean = false;
  formLogin: FormGroup;
  
  constructor(private fb: FormBuilder, private _serviceLogin: ServiceLoginService) {
    this.formLogin = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get usuario() {
    return this.formLogin.get('usuario');
  }

  get contrasena() {
    return this.formLogin.get('contrasena');
  }

  login() {
    if (this.formLogin.valid) {
      this.isLoading = true;
      this._serviceLogin.login(this.formLogin.value).subscribe((response: any) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('user', JSON.stringify(response.usuario));
        this.isLoading = false;
        window.location.href = '/';
      }, (error) => {
        console.error(error);
        this.isLoading = false;
      });
    }
  }
}
