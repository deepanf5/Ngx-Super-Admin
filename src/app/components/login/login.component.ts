import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiserviceService } from 'src/app/api/apiservice.service';
import { AuthService } from 'src/app/api/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]

})
export class LoginComponent {

  checkAdmin: any;
  allow: any;


  loginForm = this.fb.group({

    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })


  constructor(
    private api: ApiserviceService,
    private fb: FormBuilder,
    private router: Router,
    private fireAuth: AuthService,
    private messageService: MessageService

  ) {

    this.getCredentials()
  }

  getCredentials() {

    this.api.login().subscribe((res) => {
      this.checkAdmin = res;
    })
  }


  verifyAdmin() {
    this.allow = this.loginForm.value.userName === 'admin' && this.loginForm.value.password == 'superadmin@login'
    if (this.allow) {
      this.router.navigateByUrl('dashboard')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'login successfull' });
    }
    else this.messageService.add({ severity: 'error', summary: 'Error', detail: 'login failed ' });

  }


  loginWithGoogle() {

    this.fireAuth.GoogleAuth();

  }






}
