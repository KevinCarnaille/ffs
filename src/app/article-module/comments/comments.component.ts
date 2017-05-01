import {Component, OnInit, Input} from '@angular/core';
import {AddCommentService, AnswerCommentService} from './comments.service';
import {CommentInterface} from "./comments.interface";

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

    @Input() comments : CommentInterface[];
    subcomments : CommentInterface[];

    constructor(private _AddCommentService: AddCommentService, private _AnswerCommentService : AnswerCommentService) {
        this._AddCommentService.newComment$
            .subscribe(comment => this.comments.push(comment));
    }

    answerToComment(comment : CommentInterface){
       this._AnswerCommentService.addAnswer(comment.id);
    }

    ngOnInit() {
    }

}
