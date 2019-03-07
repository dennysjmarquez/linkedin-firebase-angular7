import { Component } from '@angular/core';
import { UtilitesService } from './services/utilites.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  homeShow = false;

  constructor(private title: Title, private router: Router, public utilitesService: UtilitesService) {

    const routerConfig: any = this.router.config;

    this.router.events.subscribe((event) => {

      // Si es el home lo muestro, y establezco el title dinámicamente a la pagina
      if(event instanceof NavigationEnd) {

        event.url === '/' ? (this.homeShow = true) : (this.homeShow = false);

        routerConfig.find((item) => '/' + item.path  === event.url && item.data && item.data.title && (title.setTitle(item.data.title)));

      }

    });

  }

}
