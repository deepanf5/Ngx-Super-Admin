import { Component } from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})
export class ReadmeComponent {

  events: any[];

  constructor() {
    this.events = [
      { status: 'Adding Users', icon: 'pi pi-user-plus', color: 'white', image: '../../../assets/readme/undraw_add_notes_re_ln36.svg', text: 'admin need to fill all the fields are mandatory. once you filled the all details you can enable the update button then click the update button all the data are passed to action components there admin can only add the user to the db' },
      { status: 'Editing User', icon: 'pi pi-user-edit', color: 'white', image: '../../../assets/readme/undraw_image_viewer_re_7ejc.svg', text: "admin can able to edit the user details after  click the card, Whichever user card is clicked those data are going to edit page there you can change the details of the user after clicking the update button your'e changed value will be update" },
      { status: 'Deleting user', icon: 'pi pi-trash', color: 'white', image: '../../../assets/readme/undraw_throw_away_re_x60k.svg', text: "click the user card that you want delete data will be send to action component you can simply click the  delete button  to the user, once the deleting is done the deleted users will available in the deleted user page" },
    ];
  }

}
