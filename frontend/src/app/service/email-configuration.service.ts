import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailConfigurationService {

  
  constructor(private http:HttpClient) { }

  sendMessage(body: any)
  {
    return this.http.post('http://localhost:3000/sendmail', body)
  }
}
