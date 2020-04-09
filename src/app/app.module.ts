
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FuterComponent } from './futer/futer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {HttpClientModule} from '@angular/common/http';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material/core';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FuterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
