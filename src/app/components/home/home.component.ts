import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { UtilitesService } from '../../services/utilites.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  post: Post = {

    content: '',
    autor: 'dennysjmarquez',
    fecha: new Date()

  };

  listPost: [] = [];

  constructor(private utilitesService: UtilitesService) {}

  ngOnInit() {

    setTimeout(() => this.getAllPost(), 100);

  }

  getAllPost() {

    this.utilitesService.getAllPost().subscribe(data => {

      this.utilitesService.loader = false;

      this.listPost = data.reverse();

    }, err => (this.utilitesService.loader = false, this.listPost = []));

  }

  addPost(forma: NgForm) {

    const newPost: Post = {

      content: this.post.content.replace(/\r\n|\r|\n/g, '<br/>'),
      autor: this.post.autor,
      fecha: this.post.fecha

    };

    forma.reset();

    this.utilitesService.setPost(newPost).subscribe(data => {

      this.getAllPost()

    }, err => this.utilitesService.showErr(`${err.name} ${err.status} ${ err.statusText }`));

  }

}
