import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from './icons';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a routerLink="/" class="logo footer-logo"><img class="logo-mark" src="/hanbitai-logo.png" alt="HanbitAI logo" width="34" height="34" /><span class="logo-wordmark"><b>Hanbit</b><span>AI</span></span></a>
            <p class="tagline">Build. Learn. Automate. Innovate.</p>
            <!-- <div class="socials">
              @for (s of socials; track s.name) {
                <a [href]="s.href" [attr.aria-label]="s.name" target="_blank" rel="noopener"><app-icon [name]="s.icon" /></a>
              }
            </div> -->
          </div>
          @for (col of columns; track col.title) {
            <div>
              <h4>{{ col.title }}</h4>
              <ul>
                @for (i of col.items; track i.label) {
                  <li><a [routerLink]="i.path">{{ i.label }}</a></li>
                }
              </ul>
            </div>
          }
        </div>
        <div class="copyright">© 2026 HanbitAI. All rights reserved.</div>
      </div>
    </footer>
  `,
})
export class Footer {
  socials = [
    { name: 'X', icon: 'x', href: 'https://x.com' },
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'github', href: 'https://github.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  ];
  // Pages that don't exist yet point at /contact or /about so no link is dead.
  columns = [
    { title: 'Company', items: [{ label: 'About', path: '/about' }, { label: 'Careers', path: '/contact' }, { label: 'Contact', path: '/contact' }] },
    { title: 'Services', items: [{ label: 'AI Agents', path: '/ai-agents' }, { label: 'Website Development', path: '/web-development' }, { label: 'Mobile App Development', path: '/app-development' }, { label: 'AI Solutions', path: '/contact' }] },
    { title: 'Learning', items: [{ label: 'AI Courses', path: '/ai-courses' }, { label: 'Prompt Engineering', path: '/ai-courses' }, { label: 'AI Agent Course', path: '/ai-courses' }, { label: 'AI Tutorials', path: '/ai-courses' }] },
    { title: 'Resources', items: [{ label: 'Blog', path: '/about' }, { label: 'Documentation', path: '/about' }, { label: 'FAQs', path: '/contact' }] },
  ];
}
