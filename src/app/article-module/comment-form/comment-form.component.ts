import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AddCommentService} from '../comments/comments.service';

@Component({
  selector: 'comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass']
})
export class CommentFormComponent implements OnInit {

  private commentForm : FormGroup;

  constructor(private _fb : FormBuilder, private _AddCommentService : AddCommentService) {
    this.buildCommentForm();
  }

  buildCommentForm(){
    this.commentForm = this._fb.group({
      alias : ['', Validators.required],
      message : ['', Validators.required],
      notification : false,
      email : ['', Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)]
    }, {validator : (group) => {
      if(group.controls.notification.value === true)
        return Validators.required(group.controls.email)
    }})
  }

  submitComment(){
    this._AddCommentService.addComment(this.commentForm.value)
    this.commentForm.reset();
  }

  ngOnInit() {
  }

}