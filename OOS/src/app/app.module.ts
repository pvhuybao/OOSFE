import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { Ng5BreadcrumbModule, BreadcrumbService } from 'ng5-breadcrumb';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHttpService } from './auth/auth-http.service'
import { ClientStorageService } from './shared/services/client-storage.service'
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
    Ng4LoadingSpinnerModule,
    Ng5BreadcrumbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthHttpService,
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
