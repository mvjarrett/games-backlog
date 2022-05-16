import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GamesListComponent } from './components/games-list/games-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EntryFormComponent } from './components/entry-form/entry-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { IgdbResultsComponent } from './components/igdb-results/igdb-results.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { IgdbGameCardComponent } from './components/igdb-game-card/igdb-game-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { ScreenshotModalComponent } from './components/screenshot-modal/screenshot-modal.component';
import { CoverComponent } from './components/cover/cover.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';


const appRoutes: Routes = [
    {path: '', component: IgdbResultsComponent},
    {path: 'games', component: IgdbResultsComponent},
    {path: 'backlog', component: GamesListComponent},
    {path: 'games/:gameid', component: GameDetailsComponent}
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    EntryFormComponent,
    IgdbResultsComponent,
    IgdbGameCardComponent,
    NavbarComponent,
    GameDetailsComponent,
    ScreenshotModalComponent,
    CoverComponent,
    InfiniteScrollComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
