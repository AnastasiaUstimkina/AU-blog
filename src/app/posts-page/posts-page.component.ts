import { PostsService } from './../admin/shared/posts.services';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  posts$: Observable<Post []>

  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAll()
  }

}
