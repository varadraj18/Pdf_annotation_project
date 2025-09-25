import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnotationService {
  private baseUrl = 'http://localhost:8080/api/pdf-annotation-mappings';

  constructor(private http: HttpClient) {}

  // Save multiple annotations at once
  saveBulk(payload: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`+'bulk', payload);
  }

  // Fetch annotations by process and form id
  fetchByProcessAndForm(process: number, formId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/fetch`, { process, form_id: formId });
  }
}