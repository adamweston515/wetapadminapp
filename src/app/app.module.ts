import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoginComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAwp1fjS1StStguji6Z0PXkA3Mt7Z9reuU',
      authDomain: 'wetap-b5c3e.firebaseapp.com',
      projectId: 'wetap-b5c3e',
      storageBucket: 'wetap-b5c3e.appspot.com',
      messagingSenderId: '193384010686',
      appId: '1:193384010686:web:adb11a8359009f74599fef',
      measurementId: 'G-CNSFCM3P3W',
    }),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAwp1fjS1StStguji6Z0PXkA3Mt7Z9reuU',
        authDomain: 'wetap-b5c3e.firebaseapp.com',
        projectId: 'wetap-b5c3e',
        storageBucket: 'wetap-b5c3e.appspot.com',
        messagingSenderId: '193384010686',
        appId: '1:193384010686:web:adb11a8359009f74599fef',
        measurementId: 'G-CNSFCM3P3W',
      })
    ),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
