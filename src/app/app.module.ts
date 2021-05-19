import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';

import { ContaService } from './conta.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { CadContaComponent } from './cad-conta/cad-conta.component';
import { ReactiveFormsModule , FormsModule  } from '@angular/forms';

import {DatePipe} from '@angular/common';
import { SortDirective } from './directive/sort.directive';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    CadContaComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [HttpClientModule, ContaService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
