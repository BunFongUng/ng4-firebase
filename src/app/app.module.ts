import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * imports angularFire2 and firebae modules
 */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

export const firebaseConfig: any = {
  apiKey: 'AIzaSyA4dlPcWBIUMQYdjJ8cr8sVBG4MfWwhh2s',
  authDomain: 'ng4-firebase-54aa5.firebaseapp.com',
  databaseURL: 'https://ng4-firebase-54aa5.firebaseio.com',
  projectId: 'ng4-firebase-54aa5',
  storageBucket: '',
  messagingSenderId: '80291671676'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
