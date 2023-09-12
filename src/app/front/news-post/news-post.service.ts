import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/app/post";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class PostService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServerUrl}/post/getallposts`);
  }
  public getPost(postId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiServerUrl}/post/getpost/${postId}`);
  }

  public addPost(post: Post, image: File): Observable<Post> {
    let headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});
    let newPostRequest = { 'post' : JSON.stringify(post), 'image' : image };
    let options = { reportProgress: true };
    
    let formData = new FormData();
    formData.append('post', JSON.stringify(post));
    formData.append('image', image);
    
    return this.http.post<Post>(`${this.apiServerUrl}/post/addpost`, formData, options);
  }

  public updatePost(post: Post, postId: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiServerUrl}/post/updatepost/${postId}`, post);
  }

  public deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/post/deletepost/${postId}`);
  }
  

}