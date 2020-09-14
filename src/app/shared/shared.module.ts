import { QuillModule } from 'ngx-quill';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})

export class SharedModule {

}
