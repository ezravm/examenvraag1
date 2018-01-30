import { Component, Output, EventEmitter } from '@angular/core';
import { Comment } from './comment';
import { PostService } from './post.service';

@Component({
   selector: 'post-list',
   templateUrl: './post-list.component.html'
})

export class PostListComponent  {
   comments: Comment[];
   @Output() commentsFound = new EventEmitter();

   constructor(private postService: PostService) {}

   ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => this.comments = data)
     console.log(this.comments);
   }

   getComments(index: number): void {}

   printComments(comments: Comment[]): void {}
}
