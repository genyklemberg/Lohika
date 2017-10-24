import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from '../../models/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  @Input() comments: [IComment];
  @Output() sendComment: EventEmitter<IComment> = new EventEmitter<IComment>();
  newComment: string;

  constructor() { }

  ngOnInit() {}

  sendCommentHandler(message) {
    this.sendComment.emit(<IComment>{
      author: 'Test test',
      created: new Date(),
      updated: new Date(),
      message,
      subComments: []
    });
    this.newComment = '';
  }

}
