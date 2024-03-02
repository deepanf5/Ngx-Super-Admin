import { Injectable, signal } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Injectable({
  providedIn: 'root',

})

export class AuthService {

  adminDetail: any;

  shareDetail = signal({})


  constructor(private afAuth: AngularFireAuth, private router: Router, private messageService: MessageService) { }


  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((res) => {
        this.adminDetail = res;
        this.shareDetail.set(this.adminDetail.additionalUserInfo.profile)
        this.router.navigateByUrl('dashboard')
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'login successfully' });

      })
      .catch((error) => {
        this.messageService.add({ severity: 'Error', summary: 'Error', detail: 'login failed' });

      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'log out successfully' });


    }).catch((error) => {
      this.messageService.add({ severity: 'Error', summary: 'Error', detail: 'log out failed' });

    });;
  }








}
