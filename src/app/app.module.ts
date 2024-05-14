import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllUserComponent } from './component/all-user/all-user.component';
import { SingleUserComponent } from './component/single-user/single-user.component';
import { DisplaySingleUserComponent } from './component/display-single-user/display-single-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user.reducer';
import { UserEffects } from './user.effects';

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    SingleUserComponent,
    DisplaySingleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    StoreModule.forRoot({ users: userReducer }), // Register userReducer in the root state
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([UserEffects]), // Register UserEffects
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
