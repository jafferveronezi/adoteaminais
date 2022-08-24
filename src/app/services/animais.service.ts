import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {


  readonly SERVER_URL = 'https://app-animal-pos.herokuapp.com'

  headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public getAnimiais() {
    return this.http.get(`${this.SERVER_URL}/animais`, { headers: this.headers } )
  }

}
