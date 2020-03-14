import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// tslint:disable-next-line: import-blacklist
import * as Rx from 'rxjs/Rx';
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  requestData(): Observable<any[]> {
    return this.http.get<any>('https://server.hexbird.mx:3001/api/tasks/getTasks')
    .pipe(
      map((data: any[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Nada' );
      })
    );
  }

}
