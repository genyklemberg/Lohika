import { Component } from '@angular/core';
import { ConfirmationService, Message} from 'primeng/components/common/api';
import { BookService} from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.components.css'],
  providers:  [
    ConfirmationService,
    BookService
  ]
})
export class AppComponent {

  name: string;
  userResponse: Message[]= [];
  theUserSaid: string;
  title: string;

  constructor(private confirmationService: ConfirmationService) {
    this.title = 'Hello from PrimeNG!';
  }

  onChangeEvent({target}) {
    this.name = target.value;
    console.log(this.name);
  }
  greetMe() {

    this.confirmationService.confirm({
      message: ` Hey ${this.name}, do you like PrimeNG?`,
      header: 'Greeting',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.userResponse = [];
        this.userResponse.push({severity: 'info', summary: 'Confirmed', detail: 'I like PrimeNG'});
        this.theUserSaid = this.name + ' responded ' + this.userResponse[0].detail;
      },
      reject: () => {
        this.userResponse = [];
        this.userResponse.push({severity: 'info', summary: 'Rejected', detail: 'I don\'t really like PrimeNG'});
        this.theUserSaid = this.name + ' responded ' + this.userResponse[0].detail;
      }
    });
  }

}
