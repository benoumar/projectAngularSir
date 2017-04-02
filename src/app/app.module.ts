import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.router';
import { MyservicenameService } from './myservicename.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    HttpModule,
    routes,
    MyservicenameService
  ],
  providers: [MyservicenameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
