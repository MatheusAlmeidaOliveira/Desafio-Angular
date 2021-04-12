import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from './foto';

@Injectable()
export class FotoService
{
    constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "https://jsonplaceholder.typicode.com/";

    obterFotos() : Observable<Foto[]>
    {
        return this.http.get<Foto[]>(this.UrlServiceV1 + "photos")
    }
}