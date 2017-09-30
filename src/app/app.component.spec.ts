import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { DialogModule } from 'primeng/components/dialog/dialog';
import { CheckboxModule, ConfirmDialogModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { LoginComponent } from './modals/login/login/login.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        DialogModule,
        CheckboxModule
      ],
      declarations: [
        AppComponent,
        LoginPanelComponent,
        LoginComponent
      ],
      providers: [
        {
          provide: AngularFireAuth,
          useValue: { authState: new Observable<firebase.User>(observer => observer.next({} as firebase.User)) }
        }
      ]
    }).compileComponents();
  });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Hello from PrimeNG!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hello from PrimeNG!');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello from PrimeNG!');
  }));
});
