import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyCSU6hRtcKIN2x5HmAT_yCWFZgOfMac6TE",
  authDomain: "trilha-demo.firebaseapp.com",
  databaseURL: "https://trilha-demo.firebaseio.com",
  projectId: "trilha-demo",
  storageBucket: "trilha-demo.appspot.com",
  messagingSenderId: "252872824208",
  appId: "1:252872824208:web:dec4b36d992eb4f71d8f15",
  measurementId: "G-ZT4ELRCLTX"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }