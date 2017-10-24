import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { UserServiceService } from './user-service.service';
import { PlanComponent } from './plan/plan.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DeroulementComponent } from './deroulement/deroulement.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ListeComponent } from './liste/liste.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { EvenPipe } from './even.pipe';
import { SearchPipe } from './search.pipe';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule
} from '@angular/material';


const appRoutes: Routes = [
  { path: 'confirmation', component: ConfirmationComponent },
    { path: 'plan', component: PlanComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: '', component: AccueilComponent },
    { path: 'deroulement', component: DeroulementComponent },
    { path: 'hebergement', component: HebergementComponent },
    { path: 'liste', component: ListeComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'contact', component: ContactComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAbaDCrgLsPq7TiGFSy2JkovoFyeQcCJFs',
  authDomain: 'mariage-6c200.firebaseapp.com',
  databaseURL: 'https://mariage-6c200.firebaseio.com',
  projectId: 'mariage-6c200',
  storageBucket: 'mariage-6c200.appspot.com',
  messagingSenderId: '508632744604'
};

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    PlanComponent,
    AccueilComponent,
    DeroulementComponent,
    HebergementComponent,
    ListeComponent,
    PhotosComponent,
    ContactComponent,
    EvenPipe,
    SearchPipe
  ],
  imports: [RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
