import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//firebase
import {AngularFireModule} from '@angular/fire'; 
import {environment} from '../environments/environment';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';

import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
