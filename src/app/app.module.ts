import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { JokeCardItemComponent } from './components/joke-card-item/joke-card-item.component';
import { JokeCardListComponent } from './components/joke-card-list/joke-card-list.component';
import { JokeDetailComponent } from './containers/joke-detail/joke-detail.component';
import { JokesComponent } from './containers/jokes/jokes.component';
import { RootStoreModule } from './root-store';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RootStoreModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    JokesComponent,
    JokeDetailComponent,
    JokeCardListComponent,
    JokeCardItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
