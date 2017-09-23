import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {InputTextModule, ButtonModule, ConfirmDialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import { LoginPanelComponent } from './login-panel/login-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
