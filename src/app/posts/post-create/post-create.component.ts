import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Alert } from 'selenium-webdriver';

import { Post } from '../post.model';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    @Output() postCreated = new EventEmitter<Post>();
    
    // OnAddPost() {
    //     const post: Post = {
    //         title: this.enteredTitle,
    //         content: this.enteredContent
    //     };
    //     this.postCreated.emit(post);
    // }

    OnAddPost(form: NgForm) {
        if (form.invalid) {
            return;
        }
        const post: Post = {
            title: form.value.title,
            content: form.value.content
        };
        this.postCreated.emit(post);
    }
}
