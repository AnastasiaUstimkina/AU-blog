import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PostsService } from './../admin/shared/posts.services';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from '../shared/interfaces';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$:Observable<Post>

  constructor(
    private route:ActivatedRoute,
    private postsService:PostsService
  ) { 

  }

  ngOnInit() {
    this.post$ = this.route.params
    .pipe(switchMap( (params: Params) => {
      return this.postsService.getById(params['id'])
    }))
  }

}
