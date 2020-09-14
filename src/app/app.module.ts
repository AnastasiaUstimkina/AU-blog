import { environment } from './../environments/environment';
import { AlertComponent } from './admin/shared/components/alert/alert.component';
import { AuthInterceptor } from './admin/shared/auth.interseptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {PostComponent} from './shared/components/post/post.component';
import {SharedModule} from './shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireDatabaseModule } from "@angular/fire/database";

registerLocaleData(ruLocale, 'ru')

import * as firebase from 'firebase';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

firebase.initializeApp(environment.firebaseConfig);

const interceptor_provider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    AboutPageComponent,
    PostsPageComponent,
    CvPageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  exports:[QuillModule],
  providers: [
    interceptor_provider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
