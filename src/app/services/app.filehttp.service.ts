import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppFilehttpService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = 'https://localhost:7250';
  }

  getFiles():Observable<string[]> {
     let filesResponse = this.http.get<string[]>(`${this.url}/documents`);
      return filesResponse;
  }
  getDocument(file:string) {
    alert(`In Service: ${file}`);
    return this.http.get(`${this.url}/document/${file}`, { responseType: 'blob' });
  }
}
