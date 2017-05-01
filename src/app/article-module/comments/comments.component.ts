import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AddCommentService, AnswerCommentService} from './comments.service';
import {CommentInterface} from "./comments.interface";

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

    showForm:boolean=false;
    @Input() comments : CommentInterface[];
    @Output() displayCommentForm: EventEmitter<boolean> = new EventEmitter<boolean>();
    subcomments : CommentInterface[];
    indexComment:number;

    constructor(private _AddCommentService: AddCommentService, private _AnswerCommentService : AnswerCommentService) {
        this._AddCommentService.newComment$
            .subscribe(comment => {
                if(this.indexComment != undefined){
                    if(this.comments[this.indexComment].answers == undefined){
                        this.comments[this.indexComment].answers = [];
                    }
                    this.comments[this.indexComment].answers.push(comment);
                }
            }); // Push on right key
    }

    answerToComment(comment : CommentInterface, i:number){
        this.showForm = true;
        this.displayCommentForm.emit(this.showForm);
        this.indexComment = i;
       this._AnswerCommentService.addAnswer(comment.id);
    }

    ngOnInit() {
    }

}
