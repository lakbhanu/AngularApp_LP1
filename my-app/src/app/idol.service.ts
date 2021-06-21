import { Injectable } from '@angular/core';
import { Idol } from './idol';
import { IDOLS } from './mock-idols';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class IdolService {
  private idolsUrl = 'api/idols';  // URL to web api 

  constructor( private http: HttpClient,
    private messageService: MessageService) { }

  getIdols(): Observable<Idol[]> {
    const idols = of(IDOLS);
    return this.http.get<Idol[]>(this.idolsUrl)
    .pipe(
      tap(_ => this.log('fetched idols')),
      catchError(this.handleError<Idol[]>('getIdols', []))
    );
  }

  getIdol(id: number): Observable<Idol> {
    const url = `${this.idolsUrl}/${id}`;
  return this.http.get<Idol>(url).pipe(
    tap(_ => this.log(`fetched idol id=${id}`)),
    catchError(this.handleError<Idol>(`getIdol id=${id}`))
  );
  }
   
  updateIdol(idol: Idol): Observable<any> {
    return this.http.put(this.idolsUrl, idol, this.httpOptions).pipe(
      tap(_ => this.log(`updated idol id=${idol.id}`)),
      catchError(this.handleError<any>('updateIdol'))
    );
  }

  
addIdol(idol: Idol): Observable<Idol> {
  return this.http.post<Idol>(this.idolsUrl, idol, this.httpOptions).pipe(
    tap((newIdol: Idol) => this.log(`added idol w/ id=${newIdol.id}`)),
    catchError(this.handleError<Idol>('addIdol'))
  );
}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`IdolService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); 
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }

}
