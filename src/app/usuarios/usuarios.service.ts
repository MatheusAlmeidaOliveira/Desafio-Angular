import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService{

    constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "https://jsonplaceholder.typicode.com/";

    obterUsuarios() : Observable<Usuario[]>
    {
        return this.http.get<Usuario[]>(this.UrlServiceV1 + "users")
    }

    getUser(id: number) : Observable<any>
    {
        return this.http.get<Usuario[]>(this.UrlServiceV1 + "users/" + id)
    }
}