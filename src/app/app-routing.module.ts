import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddComponent } from './actions/add/add.component';
import { EditComponent } from './actions/edit/edit.component';
import { UsersComponent } from './components/users/users.component';
import { ListViewsComponent } from './components/list-views/list-views.component';
import { DeletedComponent } from './actions/deleted/deleted.component';
import { LoginComponent } from './components/login/login.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [

      {
        path: '', component: UsersComponent,
      },
      {
        path: 'admin', component: AdminComponent
      },
      {
        path: 'add', component: AddComponent
      },
      {
        path: 'edit', component: EditComponent
      },
      {
        path: 'deleted', component: DeletedComponent
      },
      {
        path: 'listView', component: ListViewsComponent
      },
      {
        path: '**', component: PagenotfoundComponent
      }
    ]
  },
  {
    path: 'readme', component: ReadmeComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
