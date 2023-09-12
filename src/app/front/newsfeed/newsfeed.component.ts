import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from '../news-post/news-post.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService, @Inject(LOCALE_ID) private locale: string) { }

  public postTitle: string;
  public postContent: string;
  public imageData: string | ArrayBuffer;
  public imageFile: File;

  //posts[] = http get (including comments)

  ngOnInit(): void {
    
    this.getPosts();
  }

  public getPosts(): void {
    this.postService.getPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onFileChanged($event: any): void {
    this.imageFile = $event.target.files[0];
    var reader = new FileReader();
		reader.readAsDataURL(this.imageFile);
		
		reader.onload = (_event) => {
			this.imageData = reader.result; 
		}
  }

  public addNewPost(): void {
    var newPost: Post= {
      titlePost: this.postTitle,
      contentPost: this.postContent,
      likePost: 0 ,
      datePost: formatDate(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS", this.locale),
      photos: '',
      idPost: 8
    }

    this.postService.addPost(newPost, this.imageFile).subscribe(
      (response: Post) => {
        console.log(response);
        newPost.idPost=response.idPost;
        this.getPosts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    
  }

}
