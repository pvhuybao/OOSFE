import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHttpService } from './auth/auth-http.service';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //--> remove after apply API
import { InMemoryCategory } from './InMemoryCategory.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    ShoppingModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryCategory, { delay: 500 }),
  ],
  providers: [AuthService, AuthGuardService, AuthHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
