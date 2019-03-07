import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styles: []
})
export class CardPostComponent implements OnInit {

  @Input() item: any = {};

  constructor() {}

  ngOnInit() {}

}
