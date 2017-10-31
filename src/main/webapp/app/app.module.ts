import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {AgGridModule} from 'ag-grid-angular/main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }         from 'app/app.component';
import { DashboardComponent }   from 'app/dashboard.component';
import { HeroDetailComponent }  from 'app/hero-detail.component';
import { HeroesComponent }      from 'app/heroes.component';
import { HeroService }          from 'app/hero.service';

import { AppRoutingModule }     from 'app/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
