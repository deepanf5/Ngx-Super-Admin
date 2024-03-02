import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService]
})
export class AddComponent implements OnInit {

  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  mobileNumber!: number;
  address!: string;
  state!: string;
  city!: string;
  zipcode!: number;

  loading: boolean = false;

  // for gender

  stateOptions: any[] = [{ label: 'male', value: 'male' }, { label: 'female', value: 'female' }];

  value: string = 'male';


  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 100);
  }

  addUser = this.fb.group({
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

  constructor(private fb: FormBuilder, private api: ApiserviceService, private messageService: MessageService) { }
  ngOnInit(): void {

  }


  submit() {

    this.api.sendUsers(this.addUser.value);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'update to action component' });
    this.api.setDisable(false)
  }

  reset() {
    this.addUser.reset();
    this.messageService.add({ severity: 'info', summary: 'note!', detail: 'data cleared' });
  }

}
