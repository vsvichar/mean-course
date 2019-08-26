import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //     {title: "First Post", content: "This is the first post's content"},
    //     {title: "Second Post", content: "This is the second post's content"},
    //     {title: "Third Post", content: "This is the third post's content"}  
    // ];

    // @Input() posts: Post[] = [];
    posts: Post[] = [];
    private postsSub: Subscription;

    // postsService: PostsService;

    // constructor(postsService: PostsService) {
    //     this.postsService = postsService;
    // }

    // same as above:
    constructor(public postsService: PostsService) { }

    ngOnInit() {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[])=> {
            this.posts = posts;
        });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}