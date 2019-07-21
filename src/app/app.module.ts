import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JokeCardItemComponent } from './components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './components/joke-card-list/joke-card-list.component';
import { RootStoreModule } from './root-store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RootStoreModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AppComponent, JokeCardListComponent, JokeCardItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
