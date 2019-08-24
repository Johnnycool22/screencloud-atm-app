import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private post: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  addPost(pin: string) {
    const post: Post = {pin};
    this.post.push(post);
    this.postsUpdated.next([...this.post]);
    return this.http.post('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', post).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
