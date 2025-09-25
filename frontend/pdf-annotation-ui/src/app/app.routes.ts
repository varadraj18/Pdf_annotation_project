import { provideRouter, Route } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { UploadComponent } from './components/upload/upload.component';
import { MappingComponent } from './components/mapping/mapping.component';
import { ExecutiveComponent } from './components/executive/executive.component';

export const routes: Route[] = [
  { path: '', component: UploadComponent },
  { path: 'mapping/:pdfId', component: MappingComponent },
  { path: 'executive', component: ExecutiveComponent },
];

export const appProviders = [
  provideRouter(routes)
];
