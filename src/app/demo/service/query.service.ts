import { Injectable, OnInit  } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable  } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class QueryService {
    private domain: string|undefined

    constructor( private http: HttpClient, private router: Router){
        this.domain = environment.api
    }

    getProducts(): Observable<any> {
        const url = `${this.domain}/products`; // แก้ไข endpoint ตาม API backend ที่คุณสร้างขึ้น
        return this.http.get<any>(url);
    }


}