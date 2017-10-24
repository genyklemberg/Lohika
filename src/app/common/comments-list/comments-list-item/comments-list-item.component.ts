import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../../models/comment';

@Component({
  selector: 'app-comments-list-item',
  templateUrl: './comments-list-item.component.html',
  styleUrls: ['./comments-list-item.component.css']
})
export class CommentsListItemComponent implements OnInit {
  
  @Input() comment: [IComment]; 
  constructor() { }

  ngOnInit() {
  }

}
