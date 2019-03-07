import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UtilitesService } from '../../services/utilites.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styles: []
})
export class ProfilerComponent implements OnInit {

  profiler: any = {};

  constructor(private title: Title, private activatedRoute: ActivatedRoute, private utilitesService: UtilitesService, private router: Router) {

    this.activatedRoute.params.subscribe((data: any) => {

      setTimeout(() => {

        this.utilitesService.getProfiler(data.id).subscribe((data: any) => {

          this.utilitesService.loader = false;

          if (data) {

            this.profiler = data.profiler;
            title.setTitle(this.profiler.name);

          } else {

            this.router.navigate(['/in', 'unavailable']);

          }

        }, err => this.utilitesService.showErr(`${err.name} ${err.status} ${err.statusText}`));

      }, 100);

    });

  }

  ngOnInit() {
  }

}
