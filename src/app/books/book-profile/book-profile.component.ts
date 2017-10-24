import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit {
  @Input() name: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route)
    this.name = this.route.snapshot.paramMap.get('id');
  }

}
