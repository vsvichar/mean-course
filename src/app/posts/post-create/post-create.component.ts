import { NgForm } from '@angular/forms';
//import { Component, EventEmitter, Output } from '@angular/core';
import { Component} from '@angular/core';

// import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';

    // replaced with injection:
    // @Output() postCreated = new EventEmitter<Post>();
    // postCreated = new EventEmitter<Post>();

    constructor(public postsService: PostsService){}
    
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
        // const post: Post = {
        //     title: form.value.title,
        //     content: form.value.content
        // };
        
        // replaced with injection
        //this.postCreated.emit(post);

        this.postsService.addPost(form.value.title, form.value.content);
        form.resetForm();

    }
}
