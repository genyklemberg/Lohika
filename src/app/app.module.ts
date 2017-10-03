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
import { LoginPanelComponent } from './dialogs/login-panel/login-panel.component';
import { LoginComponent } from './dialogs/login/login/login.component';
import { DialogModule } from 'primeng/components/dialog/dialog';
import {CheckboxModule} from 'primeng/primeng';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksListItemComponent } from './books/books-list/books-list-item/books-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    LoginComponent,
    BooksListComponent,
    BooksListItemComponent
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
    AngularFireAuthModule,
    DialogModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
