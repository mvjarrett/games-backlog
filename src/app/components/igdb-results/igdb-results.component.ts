import { Component, OnInit, ViewChild } from '@angular/core';
import { IgdbResultsService } from '../../services/igdbResults.service';
import { igGame } from '../../models/igGame';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-igdb-results',
  templateUrl: './igdb-results.component.html',
  styleUrls: ['./igdb-results.component.css'],
})
export class IgdbResultsComponent implements OnInit {
  infiniteScroll: InfiniteScrollDirective;
  term: string | null;
  platformId: number;
  genreId: number;
  constructor(
    private igdbResults: IgdbResultsService,
    private _Activatedroute: ActivatedRoute
  ) {}
  igGames: igGame[] = [];
  throttle = 500;
  distance = 0.5;
  offset = 50;
  @ViewChild(InfiniteScrollDirective)
  set appScroll(directive: InfiniteScrollDirective) {
    this.infiniteScroll = directive;
  }

  //----------- organizational seperator ----------

  ngOnInit(): void {
    this._Activatedroute.queryParams.subscribe((queryParams: any) => {
      this.term = queryParams.term;
      this.platformId = this._Activatedroute.snapshot.params['platformId'];
      this.genreId = this._Activatedroute.snapshot.params['genreId'];
    });

    if (this.term != undefined) {
      this.searchResult(this.term);
    } else if (this.platformId != undefined) {
      this.platformResult(this.platformId);
    } else if (this.genreId != undefined) {
      this.genreResult(this.genreId);
    } else {
      this.allGames();
    }
  }

  allGames() {
    this.igdbResults.topGames().subscribe((data) => {
      if (data) {
        this.igGames = data;
      }
    });
  }

  onScroll(): void {
    this.igdbResults.infiniteGames().subscribe((data) => {
      if (data) {
        this.igGames.push(...data);
        this.infiniteScroll.setup();
        this.infiniteScroll.ngOnDestroy();
      }
      (error: any) => {
        console.error(error);
      };
    });
  }

  searchResult(term: string | null) {
    this.igdbResults.searchGames(term).subscribe((data) => {
      if (data) {
        this.igGames = data;
      }
    });
  }
  platformResult(platformId: number) {
    this.igdbResults.searchPlatforms(platformId).subscribe((data) => {
      if (data) {
        this.igGames = data;
      }
    });
  }
  genreResult(genreId: number) {
    this.igdbResults.searchGenres(genreId).subscribe((data) => {
      if (data) {
        this.igGames = data;
      }
    });
  }
}
