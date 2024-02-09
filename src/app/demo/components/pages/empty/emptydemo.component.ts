import { Component } from '@angular/core';
import { Injectable, OnInit  } from '@angular/core';
import { QueryService } from '../../../service/query.service';

@Injectable({
    providedIn: 'root'
})

@Component({
    templateUrl: './emptydemo.component.html'
})

export class EmptyDemoComponent { 

    products: any[] = [];

    constructor(private mysql: QueryService) { }
    ngOnInit(): void {
        this.sql();
    }

    sql() {
        console.log('onInit()');
        this.mysql.getProducts().subscribe((data: any[]) => {
        this.products = data;
    });
    }
}
