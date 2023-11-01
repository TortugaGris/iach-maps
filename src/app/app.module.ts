import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ChurchLocationsMapComponent} from './components/church-locations-map/church-locations-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChurchLocationsMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
