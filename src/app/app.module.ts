import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    HomeComponent,  // ✅ Import standalone component
    AboutComponent  // ✅ Import standalone component
  ],
  providers: [provideRouter(routes)], // ✅ Use provideRouter instead of RouterModule
  bootstrap: [AppComponent]
})
export class AppModule { }
