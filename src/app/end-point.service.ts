import { Injectable } from '@angular/core';
import { GraphSite } from './GraphSite';
import { endPoints } from './endPoints';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndPointService {

  constructor() { }

  getEndPoints(): Observable<GraphSite[]>{
    return of(endPoints);
  }
}
