import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddComponent } from './actions/add/add.component';
import { EditComponent } from './actions/edit/edit.component';
import { UsersComponent } from './components/users/users.component';
import { ActionComponent } from './actions/action/action.component';


// primeNg modules
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import { KnobModule } from 'primeng/knob';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ListboxModule } from 'primeng/listbox';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { PasswordModule } from 'primeng/password';
import { BadgeModule } from 'primeng/badge';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
import { ImageModule } from 'primeng/image';
import { SkeletonModule } from 'primeng/skeleton';


// forms
import { InputTextModule } from 'primeng/inputtext';




// chart js 
import { ChartModule } from 'primeng/chart';


// fire-base
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ListViewsComponent } from './components/list-views/list-views.component';
import { DeletedComponent } from './actions/deleted/deleted.component';
import { LoginComponent } from './components/login/login.component'
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MessageService } from 'primeng/api';
import { ReadmeComponent } from './components/readme/readme.component';
import { AboutmeComponent } from './componets/aboutme/aboutme.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';




const firebaseConfig = {
  apiKey: "AIzaSyBHJhPvXU9cZAu8cgFjuqtI6ZCnFX51Y6o",
  authDomain: "ngx-super-admin-1dd48.firebaseapp.com",
  projectId: "ngx-super-admin-1dd48",
  storageBucket: "ngx-super-admin-1dd48.appspot.com",
  messagingSenderId: "773839839185",
  appId: "1:773839839185:web:01115d7c1d23302cde4af0"
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    FooterComponent,
    AdminComponent,
    AddComponent,
    EditComponent,
    UsersComponent,
    ActionComponent,
    ListViewsComponent,
    DeletedComponent,
    LoginComponent,
    ReadmeComponent,
    AboutmeComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,

    // primeNg Modules 
    AvatarModule,
    SidebarModule,
    OverlayPanelModule,
    CardModule,
    ListboxModule,
    KeyFilterModule,
    MenuModule,
    TableModule,
    ConfirmPopupModule,
    ToastModule,
    RippleModule,
    TooltipModule,
    PasswordModule,
    BadgeModule,
    ScrollTopModule,
    DividerModule,
    TimelineModule,
    ImageModule,
    SkeletonModule,



    // chart js
    ChartModule,
    // forms,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    InputTextModule,
    KnobModule,


    // fire-base
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: firebaseConfig }, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
