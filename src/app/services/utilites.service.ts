import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profiler } from '../interfaces/profiler';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilitesService {

  loader  = false;
  
  URLPost = 'https://pruebaangular-01.firebaseio.com/post.json';
  URLProfiler = 'https://pruebaangular-01.firebaseio.com/users/';
  URLPostProfiler = 'https://pruebaangular-01.firebaseio.com/post.json?orderBy="autor"&equalTo=';

  user: Profiler;


  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) { }

  isPlatformBrowser(){

    return isPlatformBrowser(this.platformId);

  }

  getProfiler(name: string): Observable<any> {

    this.loader = true;

    return this.http.get(this.URLProfiler + name + '.json');

  }

  getAllPost(): Observable<any> {

    this.loader = true;
    return this.http.get(this.URLPost).pipe(map((data: any) => Object.values(data)));

  }

  setPost(post: Post): Observable<any> {

    const body = JSON.stringify(post);
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.post(this.URLPost, body, {headers});

  }

  showErr(msg: string){

    this.loader = false;

    if(this.isPlatformBrowser()){

      alert(msg);

    }else{

      console.log(msg);

    }



  }

}
