import {Component, OnInit, Input} from '@angular/core';
import {AddCommentService} from './comments.service';

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

    @Input() comments : Object[];

    constructor(private _AddCommentService: AddCommentService) {
        this._AddCommentService.newComment$
            .subscribe(comment => this.comments.push(comment));
    }

    ngOnInit() {
    }

}
