import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Listas } from "./listas";

@Injectable({
    providedIn: 'root'
})

export class listaService {

    constructor(private _httpClient: HttpClient) { }
        private url = "http://localhost:3000/lista";

        getListas(): Observable<Listas[]>
        {
            return this._httpClient.get<Listas[]>(this.url)
        }

}