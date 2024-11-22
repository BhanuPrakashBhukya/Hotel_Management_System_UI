import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCommonService } from '../../common/services/common.abstract.service';
import { HotelBranches } from '../model/hotel-branches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelBranchesService extends AbstractCommonService<HotelBranches> {
  response: HotelBranches[] = [];

  constructor(http: HttpClient) {
    super(http, 'branches');
  }

  getHotelBranches(): Observable<HotelBranches[]> {
    return this.http.get<HotelBranches[]>(this.fullUrl + '', {
      headers: this.getHttpHeaders(),
    });
  }

  tableHeaders = [
    {
      key: 'id',
      header: 'ID',
      isHyperlink: true,
    },
    {
      key: 'name',
      header: 'Name',
      isHyperlink: false,
    },
    {
      key: 'phoneNumber',
      header: 'Phone Number',
      isHyperlink: false,
    },
    {
      key: 'gmail',
      header: 'Gmail',
      isHyperlink: false,
    },
    {
      key: 'address',
      header: 'Address',
      isHyperlink: false,
    },
    {
      key: 'total',
      header: 'Total Rooms',
      isHyperlink: false,
    },
    {
      key: 'nonSuite',
      header: 'Non-Suite Rooms',
      isHyperlink: false,
    },
    {
      key: 'suite',
      header: 'Suite Rooms',
      isHyperlink: false,
    },
    {
      key: 'nonSuiteAvailable',
      header: 'Non-Suite Available',
      isHyperlink: false,
    },
    {
      key: 'suiteAvailable',
      header: 'Suite Available',
      isHyperlink: false,
    },
  ];
}
