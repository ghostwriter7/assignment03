import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './ui/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './core/store/app.reducer';
import { AuthEffects } from './pages/auth/core/store/auth.effects';
import { MatButtonModule } from '@angular/material/button';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderComponent } from './ui/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
