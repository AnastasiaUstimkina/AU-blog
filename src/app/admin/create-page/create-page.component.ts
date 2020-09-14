import { environment } from './../../../environments/environment';
import { AlertService } from './../shared/services/alert.service';
import { PostsService } from './../shared/posts.services';
import { Post } from './../../shared/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Pipe } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private PostsService: PostsService,
    private alert: AlertService
    ) { }

  selectedFile:File = null;
  loadedImg: boolean = false;
  post: Post = {
    title: '',
    data: '',
    text: '',
    imgPath: ''
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0]; 
    console.log(event);
    //return this.selectedFile = event.target.files[0]
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    }
    )
  }

  submit(){
    if (this.form.invalid){
      return
    }
    this.post = {
      title: this.form.value.title,
      data: this.form.value.data,
      text: this.form.value.text,
      imgPath: this.post.imgPath
    }

    this.PostsService.create(this.post).subscribe( () => {
      this.form.reset()
      this.alert.success('пост создан')
    })
    console.log(this.post)
    this.selectedFile = null;
  }
  
  
  onUpload(){
    const filePath = `images/${this.selectedFile.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const storagePath = firebase.storage().ref(filePath);

    this.loadedImg = false;
    this.post.imgPath = filePath;
    var that = this;
  
    storagePath.put(this.selectedFile)
    .then(snapshot => {
        return snapshot.ref.getDownloadURL();  })
      .then(downloadURL => {
          console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
          that.post.imgPath = downloadURL;
          that.loadedImg = true;
          return downloadURL; })
        .catch(error => {
            console.log(`Failed to upload file and get link - ${error}`);
        });
  }

}
