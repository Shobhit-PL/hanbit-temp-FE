import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'HanbitAI | Build. Learn. Automate. Innovate.', loadComponent: () => import('./pages/home').then(m => m.Home) },
  { path: 'ai-agents', title: 'AI Agents | HanbitAI', data: { key: 'agents' }, loadComponent: () => import('./pages/service-page').then(m => m.ServicePage) },
  { path: 'ai-courses', title: 'AI Courses | HanbitAI', data: { key: 'courses' }, loadComponent: () => import('./pages/service-page').then(m => m.ServicePage) },
  { path: 'web-development', title: 'Web Development | HanbitAI', data: { key: 'web' }, loadComponent: () => import('./pages/service-page').then(m => m.ServicePage) },
  { path: 'app-development', title: 'App Development | HanbitAI', data: { key: 'app' }, loadComponent: () => import('./pages/service-page').then(m => m.ServicePage) },
  { path: 'about', title: 'About | HanbitAI', loadComponent: () => import('./pages/about').then(m => m.About) },
  { path: 'contact', title: 'Contact | HanbitAI', loadComponent: () => import('./pages/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' },
];
