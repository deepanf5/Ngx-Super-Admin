import { Component, effect } from '@angular/core';
import { AuthService } from 'src/app/api/auth/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // value!: number;

  adminDetail!: any
  adding = 67
  deleting = 25;
  editing = 56

  constructor(private fireAuth: AuthService) {

    effect(() => {
      this.adminDetail = this.fireAuth.shareDetail();
    })

  }







}
