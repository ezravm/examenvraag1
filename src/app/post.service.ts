import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

import { Comment } from './comment';

@Injectable()
export class PostService {

  private productsServiceURI: string = 'http://jsonplaceholder.typicode.com';

   constructor(private http: HttpClient) {}

   // get all posts
   getAllPosts(): Observable<Comment[]> {

   let url = `${this.productsServiceURI}/posts`;
   console.log(url);
   console.log(this.http.get<Comment[]>(url));
   return this.http.get<Comment[]>(url);

 }

   // get comments based on the index
  /* getCommentsForPost(index: number): Observable<Comment[]> {}*/
}
