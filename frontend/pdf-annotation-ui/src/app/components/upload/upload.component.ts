import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from '../../services/pdf.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Upload PDF</h2>
    <input type="file" (change)="onSelect($event)" accept="application/pdf"/>
    <button (click)="upload()" [disabled]="!file">Upload</button>
  `
})
export class UploadComponent {
  file: File | null = null;

  constructor(private pdfService: PdfService, private router: Router) {}

  onSelect(event: any) {
    this.file = event.target.files?.[0] ?? null;
  }

  upload() {
    if (!this.file) return;
    this.pdfService.upload(this.file).subscribe((res: any) => {
      alert("Uploaded PDF ID: " + res.pdf_id);
      this.router.navigate(['/mapping', res.pdf_id]);
    });
  }
}