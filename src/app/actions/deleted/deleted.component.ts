import { Component, OnInit, effect } from '@angular/core';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {


  deletedUser: any = []


  constructor(private api: ApiserviceService) {

  }
  ngOnInit(): void {

    this.api.getDeletedUser().subscribe((res) => {
      this.deletedUser = res
    })

  }

}
