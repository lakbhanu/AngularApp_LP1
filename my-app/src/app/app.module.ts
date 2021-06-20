import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdolsComponent } from './idols/idols.component';

import { FormsModule } from '@angular/forms';
import { IdolDetailComponent } from './idol-detail/idol-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    IdolsComponent,
    IdolDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
