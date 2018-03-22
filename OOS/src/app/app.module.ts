import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHttpService } from './auth/auth-http.service'

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AdminModule,
    ShoppingModule,
    AppRoutingModule,    
    AngularFontAwesomeModule,
    NouisliderModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [
    AuthService, 
    AuthGuardService, 
    AuthHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
