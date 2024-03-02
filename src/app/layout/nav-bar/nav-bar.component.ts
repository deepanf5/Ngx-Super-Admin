import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/api/auth/auth.service';

interface NavItems {
  name: string,
  code: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [MessageService]
})
export class NavBarComponent implements OnInit {

  sidebarVisible1: any
  items!: MenuItem[];

  adminDetail!: any
  adminName: any




  constructor(private fireAuth: AuthService, private router: Router, private messageService: MessageService) {

    effect(() => {
      this.adminDetail = this.fireAuth.shareDetail();
      this.adminName = this.adminDetail.family_name;
    })

  }

  ngOnInit(): void {
    // this.adminName = localStorage.getItem('adminame')
    // console.log(this.adminName)


    this.items = [

      {
        label: 'List view',
        icon: PrimeIcons.LIST,
        routerLink: 'listView',
        command: () => this.closeSideBar()
      },
      {
        label: 'Read',
        icon: PrimeIcons.BOOK,
        routerLink: '/readme'
      },
      {
        label: 'About me',
        icon: PrimeIcons.CODE,
        routerLink: 'about'
      }
    ];


  }
  // confirm(event: Event) { }

  closeSideBar() {

    this.sidebarVisible1 = false

  }


  signOut() {

    this.fireAuth.SignOut();
    this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'log out  successfully' });
    this.router.navigateByUrl('');
    localStorage.clear();


  }



}
