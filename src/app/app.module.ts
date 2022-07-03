import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiclesModule } from './vehicles/vehicles.module';
import { EquipmentsModule } from './equipments/equipments.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VehiclesModule,
    EquipmentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
