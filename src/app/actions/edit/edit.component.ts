import { Component, OnInit, effect } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import effects from 'chart.js/dist/helpers/helpers.easing';
import { MessageService } from 'primeng/api';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {


  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  mobileNumber!: number;
  address!: string;
  state!: string;
  city!: string;
  zipcode!: number;

  blockChars: RegExp = /^[^<>*!]+$/;
  loading: boolean = false;
  userDetails: any
  id!: string


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 100);
  }


  stateOptions: any[] = [{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }];



  editUser = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  })

  constructor(private fb: FormBuilder, private api: ApiserviceService, private messageService: MessageService) {



    effect(() => {

      this.userDetails = this.api.usersDetails()
      this.id = this.userDetails.id;
      this.editUser = this.fb.group({
        firstName: new FormControl(this.userDetails['firstName'], [Validators.required]),
        lastName: new FormControl(this.userDetails['lastName'], [Validators.required]),
        email: new FormControl(this.userDetails['email'], [Validators.required]),
        gender: new FormControl(this.userDetails['gender'], [Validators.required]),
        status: new FormControl(this.userDetails['status'], [Validators.required]),
        mobileNumber: new FormControl(this.userDetails['mobileNumber'], [Validators.required]),
        address: new FormControl(this.userDetails['address'], [Validators.required]),
        state: new FormControl(this.userDetails['state'], [Validators.required]),
        city: new FormControl(this.userDetails['city'], [Validators.required]),
        zipcode: new FormControl(this.userDetails['zipcode'], [Validators.required]),
        company: new FormControl(this.userDetails['company'], [Validators.required]),
        rating: new FormControl(this.userDetails['rating'], [Validators.required]),

      })

    })


  }
  ngOnInit(): void {

  }


  submit() {
    this.api.edit(this.id, this.editUser.value)
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'updated' });
    this.api.setDisable(false)
  }


}
