import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/lib/modules/material.module';
import { HomeModule } from './views/pages/home/home.module';
import { CustomLayoutComponent } from './views/custom-layout/custom-layout.component';
import { ToolbarModule } from './core/lib/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToolbarModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
