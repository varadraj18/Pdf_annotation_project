import { Component } from '@angular/core';
import { AnnotationService } from '../../services/annotation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-executive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Executive Page</h2>
    <label>Process: <input [(ngModel)]="process"/></label>
    <label>Form ID: <input [(ngModel)]="formId"/></label>
    <button (click)="fetch()">Fetch</button>
    <pre>{{ mappings | json }}</pre>
  `
})
export class ExecutiveComponent {
  process = 49;
  formId = 20;
  mappings: any;

  constructor(private annService: AnnotationService) {}

  fetch() {
    this.annService.fetchByProcessAndForm(this.process, this.formId)
      .subscribe(res => this.mappings = res);
  }
}
