import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes

import { ProfilerComponent } from './components/profiler/profiler.component';
import { ProfilerUnavailableComponent } from './components/profiler/profiler.unavailable.component';

const titleDefault = 'Examen para la vacante de Angular';

const routes: Routes = [
  { path: 'in/unavailable', component: ProfilerUnavailableComponent, data: { title: titleDefault }},
  { path: 'in/:id', component: ProfilerComponent},
  { path: '**',  pathMatch: 'full', redirectTo: '/', data: { title: titleDefault } },
  { path: '',  pathMatch: 'full', redirectTo: '/', data: { title: titleDefault } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
