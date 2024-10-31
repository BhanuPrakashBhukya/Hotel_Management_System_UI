import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class AbstractCommonService<T> {

  public static baseUrl = environment.url + '/hotel/v1';

  getContextPath(): string {
    return this.contextPath;
  }

  protected fullUrl: string;

  constructor(protected http: HttpClient, public contextPath: string) { 
    this.fullUrl = AbstractCommonService.baseUrl + '/' + this.contextPath;
   }
}
