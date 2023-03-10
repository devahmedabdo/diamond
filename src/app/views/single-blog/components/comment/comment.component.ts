import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogComment } from 'src/app/interfaces/blogs';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { faBagShopping, faReply } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comment!: BlogComment;
  // @Input() nested!: boolean;
  // @Input() directNested!: boolean;
  // @Output() addCommentEvent :new EventListener
  @Output() addCommentEvent = new EventEmitter<BlogComment>();
  @Input() reply!: any;
  @Input() parent!: any;
  @Input() hide!: boolean;
  @Input() user!: User;
  hideAllReplies: boolean = true;
  constructor(private fb: FormBuilder) {}
  replyIcon = faReply;
  commentReplayes: any[] = [];
  viewReplies() {
    this.commentReplayes = this.comment.replies;
    this.hideAllReplies = false;
    this.hide = false;
  }

  addReplyForm = this.fb.group({
    comment: ['', [Validators.required]],
  });

  addComment(commentData: any, input: any) {
    let reply: BlogComment = {
      comment: commentData.comment,
      owner: 'Ahmed' + ' ' + 'Abdo',
      img: '../assets/users/user (2).webp',
      date: new Date().toDateString(),
      replies: [],
    };
    input.value = '';
    // let reply: BlogComment = {
    //   comment: commentData.comment,
    //   owner: this.user.firstName + ' ' + this.user.lastName,
    //   img: '../assets/users/user (2).webp',
    //   date: new Date().toDateString(),
    //   replies: [],
    // };
    if (this.parent.reply > 2) {
      this.addCommentEvent.emit(reply);
    } else {
      this.comment.replies.push(reply);
    }
    this.viewReplies();
    // console.log(this.comment);
  }
  addReply(comment: BlogComment) {
    this.comment.replies.push(comment);
  }
  ngOnInit() {
    if (this.comment.replies.length > 3) {
      this.commentReplayes = this.comment.replies.slice(0, 3);
    } else {
      this.commentReplayes = this.comment.replies;
    }
  }
}
