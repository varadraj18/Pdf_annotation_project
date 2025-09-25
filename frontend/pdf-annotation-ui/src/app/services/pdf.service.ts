import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.baseUrl}/pdf/upload`, formData);
  }

  getFile(pdfId: number) {
    return this.http.get(`${this.baseUrl}/files/${pdfId}`, { responseType: 'blob' });
  }
}