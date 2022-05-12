import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentNewsFeed } from 'src/app/newsfeed-comment';
import { Post } from 'src/app/post';
import { PostService } from './news-post.service';
import { CommentNewsFeedService } from './newsfeed-comment.service';

@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.css']
})
export class NewsPostComponent implements OnInit {

  posts: any[];
  comments: any[];

  constructor(private postService: PostService, private commentNewsFeedService: CommentNewsFeedService) { }

  ngOnInit(): void {
    this.getComments();
  }

  @Input() title: string;
  @Input() subtitle: string;
  @Input() content: string;
  @Input() idpost: string;
  @Input() image: string | ArrayBuffer

  public commContent: string;
  public liked: boolean;


  public showNewCommentInput: boolean;

  public toggleCommentInput(): void {
    this.showNewCommentInput = !this.showNewCommentInput;
  }

  public toggleLike(): void {
    this.liked = !this.liked;
  }

 

  public getComments(): void {
    if(this.idpost)
    this.commentNewsFeedService.getCommentNewsFeeds(this.idpost).subscribe(
      (response: CommentNewsFeed[]) => {
        this.comments = response;
      },
      (error: HttpErrorResponse) => {
        return;
      }
    );
  }

  public onAddComment(): void {

    var comment : CommentNewsFeed = {
      IdComment: '33',
      DateComment: '',
      ContentComment: this.commContent
    }

    console.log(this.commContent);
    console.log(comment);

    var id = Number.parseInt(this.idpost);
    // document.getElementById('add-reservation-form').click();
    this.commentNewsFeedService.addCommentNewsFeed(comment, id).subscribe(
      (response: CommentNewsFeed) => {
        console.log(response);
        this.comments.push(comment);
        this.commContent = '';
      },
      (error: HttpErrorResponse) => {
        return;
      }
    );
  }

}
