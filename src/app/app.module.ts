import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeCardItemComponent } from './components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './components/joke-card-list/joke-card-list.component';
import { JokesComponent } from './containers/jokes/jokes.component';
import { RootStoreModule } from './root-store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RootStoreModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    JokesComponent,
    JokeCardListComponent,
    JokeCardItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
