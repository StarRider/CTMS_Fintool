import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class EntryService
{
  constructor(private http : HttpClient) { }

  book(rangerData) : Observable<any>
  {
    console.log("Inside Service of Angular")
    return this.http.post("http://localhost:1050/addEntry", rangerData);
  }
}
