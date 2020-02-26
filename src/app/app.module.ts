import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ClientPageModule } from './client-page/client-page.module';
import { SupporterPageModule } from './supporter-page/supporter-page.module';
import { SessionGuard } from './session.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ClientPageModule,
    SupporterPageModule,
    HttpClientModule
  ],
  exports: [
    AppComponent
  ],
  providers: [SessionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
