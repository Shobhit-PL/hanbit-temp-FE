import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="nav">
      <div class="container nav-inner">
        <a routerLink="/" class="logo" aria-label="HanbitAI home" (click)="open.set(false)">
          <img class="logo-mark" src="/hanbitai-logo.png" alt="HanbitAI logo" width="34" height="34" />
          <span class="logo-wordmark"><b>Hanbit</b><span>AI</span></span>
        </a>
        <button class="menu-btn" (click)="open.set(!open())" [attr.aria-expanded]="open()" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <nav class="links" [class.open]="open()">
          @for (l of links; track l.path) {
            <a [routerLink]="l.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact: l.path === ''}" (click)="open.set(false)">{{ l.label }}</a>
          }
          <a routerLink="/contact" class="btn btn-primary nav-cta" (click)="open.set(false)">Start a project</a>
        </nav>
      </div>
    </header>
  `,
})
export class Navbar {
  open = signal(false);
  links = [
    { label: 'Home', path: '' },
    { label: 'AI Agents', path: '/ai-agents' },
    { label: 'AI Courses', path: '/ai-courses' },
    { label: 'Web Development', path: '/web-development' },
    { label: 'App Development', path: '/app-development' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
