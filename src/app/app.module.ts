import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { UserServiceService } from './user-service.service';
import { PlanComponent } from './plan/plan.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DeroulementComponent } from './deroulement/deroulement.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ListeComponent } from './liste/liste.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: 'confirmation', component: ConfirmationComponent },
    { path: 'plan', component: PlanComponent },
    { path: 'accueil', component: AccueilComponent },
    { path: '', component: AccueilComponent },
    { path: 'deroulement', component: DeroulementComponent },
    { path: 'hebergement', component: HebergementComponent },
    { path: 'liste', component: ListeComponent },
    { path: 'photos', component: PhotosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    PlanComponent,
    AccueilComponent,
    DeroulementComponent,
    HebergementComponent,
    ListeComponent,
    PhotosComponent
  ],
  imports: [RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
