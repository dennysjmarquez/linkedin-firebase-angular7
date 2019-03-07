import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Idioma Español

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-US';
registerLocaleData(localeEs);

// Directivas

import { RightPotitionStickyDirective } from './directives/right-potition-sticky.directive';

// Componentes

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProfilerComponent } from './components/profiler/profiler.component';
import { HomeComponent } from './components/home/home.component';
import { CardPostComponent } from './shared/components/card-post/card-post.component';
import { ProfilerUnavailableComponent } from './components/profiler/profiler.unavailable.component';
import { ExpandCollapseBlockDirective } from './directives/expand-collapse-block.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilerComponent,
    HomeComponent,
    RightPotitionStickyDirective,
    CardPostComponent,
    ProfilerUnavailableComponent,
    ExpandCollapseBlockDirective,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-US'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
