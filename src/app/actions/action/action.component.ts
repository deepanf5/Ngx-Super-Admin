import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
  providers: [MessageService]
})
export class ActionComponent implements OnInit {

  userDetails: any

  disable = true;
  id!: string;
  setAddButton = true



  constructor(public api: ApiserviceService, private router: Router, private messageService: MessageService) {

    effect(() => {

      this.userDetails = this.api.usersDetails();
      this.disable = this.api.disable();
      this.setAddButton = this.api.addButton()
      this.id = this.userDetails.id

    });

  }
  ngOnInit(): void { }


  add() {
    this.api.setAddButton(false);
    if (this.userDetails.length === 0) this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'no data to  add' });

    else {
      this.api.add(this.userDetails).then((res) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'user added successfully' });;
      })
        .catch((error) => {
          this.messageService.add({ severity: 'Error', summary: 'Error', detail: 'failed to data' });

        });
    }
  }

  delete() {

    this.api.addDeletedUser(this.userDetails)
    this.api.delete(this.id).then((res) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'user  deletedsuccessfully' });;
    })
    this.userDetails = {}
    setTimeout(() => {
      this.router.navigateByUrl('dashboard')
    }, 200);

  }

  reset() {
    this.userDetails = {}
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'data cleared' });;
  }












}
