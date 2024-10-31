import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../country';
import { AbstractCommonService } from '../../common/common.abstract.service';
import { Login } from '../modules/login';
import { States } from '../../states';
import { Hotel } from '../../hotel/hotel';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AbstractCommonService<Login> {

  constructor(http: HttpClient) { 
    super(http, "");
   }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.fullUrl + "countries");
  }

  getStates(): Observable<States[]> {
    return this.http.get<States[]>(this.fullUrl + "states");
  }

  register(hotel: Hotel): Observable<any> {
    return this.http.post<any>(this.fullUrl + "register", hotel);
  }
}
