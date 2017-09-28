import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {InputTextModule, ButtonModule, ConfirmDialogModule, TreeModule, TabViewModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { CatalogBarComponent } from './catalog-bar/catalog-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    HomeComponent,
    ListingComponent,
    CatalogBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    TreeModule,
    TabViewModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


