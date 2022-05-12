import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentNewsFeed } from "src/app/newsfeed-comment";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class CommentNewsFeedService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getCommentNewsFeeds(postId: string): Observable<CommentNewsFeed[]> {
    return this.http.get<CommentNewsFeed[]>(`${this.apiServerUrl}/commentnewsfeed/getallcomments/${postId}`);
  }
  public getCommentNewsFeed(commentNewsFeedId: number): Observable<CommentNewsFeed[]> {
    return this.http.get<CommentNewsFeed[]>(`${this.apiServerUrl}/commentnewsfeed/getcomment/${commentNewsFeedId}`);
  }

  public addCommentNewsFeed(commentNewsFeed: CommentNewsFeed, postId: number): Observable<CommentNewsFeed> {
    return this.http.post<CommentNewsFeed>(`${this.apiServerUrl}/commentnewsfeed/addcomment/${postId}`, commentNewsFeed);
  }

  public updateCommentNewsFeed(commentNewsFeed: CommentNewsFeed, commentNewsFeedId: number): Observable<CommentNewsFeed> {
    return this.http.put<CommentNewsFeed>(`${this.apiServerUrl}/commentnewsfeed/updatecomment/${commentNewsFeedId}`, commentNewsFeed);
  }

  public deleteCommentNewsFeed(commentNewsFeedId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}commentnewsfeed/deletecomment/${commentNewsFeedId}`);
  }
}