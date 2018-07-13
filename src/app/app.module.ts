import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutes,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
