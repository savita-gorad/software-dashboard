import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebServicesService {
  
  API_URL:string="https://1.api.fy23ey05.careers.ifelsecloud.com/"

  constructor(private http: HttpClient) { }

  public getFromServer(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
