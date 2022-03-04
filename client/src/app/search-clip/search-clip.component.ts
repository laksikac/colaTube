import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { ClipApiService } from '../clip-api.service';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Clip } from '../clip'

@Component({
  selector: 'app-search-clip',
  templateUrl: './search-clip.component.html',
  styleUrls: ['./search-clip.component.css']
})
export class SearchClipComponent implements OnInit {
  clips$!: Observable<Clip[]>;
  private searchTerms = new Subject<string>();

  constructor(private clipService: ClipApiService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.clips$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.clipService.searchClips(term)),
    );
  }

}
