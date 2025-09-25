import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnotationService } from '../../services/annotation.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as pdfjsLib from 'pdfjs-dist';

@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>PDF Mapping (PDF ID: {{pdfId}})</h2>
    <canvas #pdfCanvas style="border:1px solid black;"></canvas>
    <br>
    <input [(ngModel)]="fieldName" placeholder="Field Name"/>
    <button (click)="save()">Save Selection</button>
  `
})
export class MappingComponent implements OnInit {
  @ViewChild('pdfCanvas', { static: true }) pdfCanvas!: ElementRef<HTMLCanvasElement>;
  pdfId!: number;
  pdfDoc: any;
  fieldName = '';

  constructor(private route: ActivatedRoute, private annService: AnnotationService) {}

  async ngOnInit() {
    this.pdfId = Number(this.route.snapshot.paramMap.get('pdfId'));
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.worker.min.js';
    const url = `http://localhost:8080/files/${this.pdfId}`;
    this.pdfDoc = await pdfjsLib.getDocument(url).promise;
    const page = await this.pdfDoc.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = this.pdfCanvas.nativeElement;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d')!;
    await page.render({ canvasContext: ctx, viewport }).promise;
  }

  save() {
    const payload = [{
      pdf_id: this.pdfId,
      process: 49,
      form_id: 20,
      field_id: 1,
      field_name: this.fieldName,
      field_header: this.fieldName,
      bbox: [100, 200, 300, 250],
      page: 1,
      scale: 1.5,
      field_type: "CharField",
      metadata: { required: true }
    }];
    this.annService.saveBulk(payload).subscribe(r => alert("Saved!"));
  }
}