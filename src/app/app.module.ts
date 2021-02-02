import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialDesignModule } from './models/MaterialDesing.module';

//components
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CrearProjectComponent } from './pages/crear-project/crear-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    CrearProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule
  ],
  entryComponents: [
    CrearProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
