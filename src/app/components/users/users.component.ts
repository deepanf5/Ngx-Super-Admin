import { Component, effect } from '@angular/core';

import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  allUsers: any;
  id!: number;

  constructor(private api: ApiserviceService) {

    effect(() => {
      this.id = this.api.sendId()
    })

    this.getUsers();

  }

  trackByFn(index: number, items: any) {

    return index
  }

  getUsers() {
    this.api.get().subscribe((res) => {
      this.allUsers = res;
      console.log(this.allUsers);
    })



    // this.allUsers = [
    //   {
    //     id: 1,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 2,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "jeff",
    //     gender: "male",
    //     lastName: "hardy",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 3,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 4,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 5,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 6,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 7,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 8,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 9,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   },
    //   {
    //     id: 10,
    //     address: "24 twilight street first cross",
    //     city: "city ",
    //     email: "b@gmail.com",
    //     firstName: "brock",
    //     gender: "male",
    //     lastName: "Lesnar ",
    //     mobileNumber: "8766227278",
    //     state: "state",
    //     zipcode: "60059"
    //   }
    // ]




  }

  sendDateToAction(user: any) {

    this.api.sendUsers(user)
    this.api.setDisable(false)


  }


}
