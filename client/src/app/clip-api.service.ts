import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClipApiService {
  private clipsUrl = 'http://localhost:8000/clip/';
  private searchclipsUrl = 'http://localhost:8000/database/';

  getClips(): Observable<any[]> {
    return this.http.get<any[]>(this.clipsUrl);
  }

  getClip(id: number): Observable<any> {
    const url = `${this.searchclipsUrl}${id}/`;
    return this.http.get<any>(url);
  }

 
  updateClip(val: any): Observable<any> {
    return this.http.put(this.clipsUrl,val);
  }


  addClip(val: any): Observable<any> {
    return this.http.post(this.clipsUrl,val);
  }

  deleteClip(val: any): Observable<any> {
    return this.http.delete(this.clipsUrl + val);
  }

  searchClips(term: string): Observable<any[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any[]>(`${this.searchclipsUrl}search/?_key=${term}`);
  }
  
  constructor( private http: HttpClient ) { }
}
