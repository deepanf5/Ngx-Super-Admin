import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-list-views',
  templateUrl: './list-views.component.html',
  styleUrls: ['./list-views.component.css']
})
export class ListViewsComponent implements OnInit {


  allUsers: any;
  data: any;
  id!: string


  constructor(private api: ApiserviceService) {



  }
  ngOnInit(): void {
    this.api.get().subscribe((res) => {
      this.allUsers = res;
    })
  }


  sendData(user: any) {

    this.api.sendUsers(user);

  }

  delete(user: any, id: string) {
    this.api.delete(id)

  }

  clear(table: Table) {
    table.clear();
  }


}
