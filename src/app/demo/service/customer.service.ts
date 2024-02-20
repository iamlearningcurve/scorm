import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CustomerService {
    baseUrl = 'https://api.apispreadsheets.com/data/uCRRdnkv1ct5Re8i/'
    constructor(private http: HttpClient) { }

    postCustomer(data: any) {
        return lastValueFrom(this.http.post<any>(`${this.baseUrl}`, data));
    }
}
