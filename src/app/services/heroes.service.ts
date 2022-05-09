import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHeroe } from '../interfaces/heroes.interface';

@Injectable()
export class HeroesService {

    private actionUrl: string = "http://localhost:3100/api/heroes";
    public users: IHeroe[] = [];

    constructor(private _http: HttpClient) {
    }

    getHeroes(): Observable<IHeroe[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this._http.get<IHeroe[]>(this.actionUrl, httpOptions);
    }

    getHeroe(id :number): Observable<IHeroe> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this._http.get<IHeroe>(`${this.actionUrl}/${id}`, httpOptions);
    }

}