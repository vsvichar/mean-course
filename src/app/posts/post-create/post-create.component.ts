import { Component } from "@angular/core";
import { Alert } from 'selenium-webdriver';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredValue = '';
    newPost = 'NO TEXT';

    OnAddPost() {
        this.newPost = this.enteredValue;
    }
}
