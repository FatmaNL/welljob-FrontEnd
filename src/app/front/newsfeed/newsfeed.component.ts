import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from '../news-post/news-post.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  posts: any[];
  constructor(private postService: PostService) { }

  public postTitle: string;
  public postContent: string;
  public imageUrl: string | ArrayBuffer;

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
    var file = $event.target.files[0];
    var reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = (_event) => {
			this.imageUrl = reader.result; 
		}
  }

  public addNewPost(): void {
    var newPost= {
      titlePost: this.postTitle,
      contentPost: this.postContent,
      datePost: new Date().toDateString(),
      image: this.imageUrl,
      idPost: 8
    }

    // http POST /post

    this.posts.push(newPost);
    
  }

}
