import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { coms } from "./coms";

@Injectable({
    providedIn: 'root'
})

export class comService {

    constructor(private _httpClient: HttpClient) { }
        private url = "http://localhost:3000/users?email=";

        getCom(): Observable<coms[]>
        {
            return this._httpClient.get<coms[]>(this.url+sessionStorage.getItem('email'))
        }

}