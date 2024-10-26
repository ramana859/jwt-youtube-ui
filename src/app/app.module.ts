import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideRouter, RouterModule, CanActivateFn } from '@angular/router';
import { authGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { inject } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
