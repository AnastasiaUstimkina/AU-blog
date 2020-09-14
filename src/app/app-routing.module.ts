import { CvPageComponent } from './cv-page/cv-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'about', component:AboutPageComponent},
      {path: 'cv', component:CvPageComponent},
      {path: 'posts', component:PostsPageComponent},
      {path: 'posts/:id', component: PostPageComponent}
    ]
  },
  {
    
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
