import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { TriangleService } from './triangle.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TriangleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
