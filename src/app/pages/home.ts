import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Api, Testimonial } from '../core/api';
import { Counter } from '../core/counter';
import { Icon } from '../shared/icons';

const FALLBACK: Testimonial[] = [
  { id: 1, name: 'Aarav Mehta', role: 'Founder', company: 'Nimbus Retail', quote: 'HanbitAI helped us transform our idea into a working AI-powered product.', rating: 5, image_url: 'https://i.pravatar.cc/160?img=12' },
  { id: 2, name: 'Sofia Alvarez', role: 'Head of Operations', company: 'Larkspur Logistics', quote: 'Their support agent now resolves most routine tickets before our team even logs in.', rating: 5, image_url: 'https://i.pravatar.cc/160?img=47' },
  { id: 3, name: 'Daniel Kim', role: 'CTO', company: 'Brightpath Health', quote: 'Clean Angular code, a solid FastAPI backend, and a team that explains every decision.', rating: 5, image_url: 'https://i.pravatar.cc/160?img=33' },
  { id: 4, name: 'Priya Nair', role: 'Data Analyst', company: 'Career switcher', quote: 'The AI course had me building a working agent in the second week.', rating: 5, image_url: 'https://i.pravatar.cc/160?img=5' },
  { id: 5, name: 'Marcus Webb', role: 'Product Manager', company: 'Orbit Labs', quote: 'They shipped our mobile app on schedule and the AI features worked from day one.', rating: 4, image_url: 'https://i.pravatar.cc/160?img=15' },
  { id: 6, name: 'Hana Sato', role: 'Co-founder', company: 'Koto Studio', quote: 'We went from a rough brief to a live site with booking automation in six weeks.', rating: 5, image_url: 'https://i.pravatar.cc/160?img=45' },
];

@Component({
  selector: 'app-home',
  imports: [RouterLink, Counter, Icon],
  template: `
    <section class="hero container">
      <div class="hero-copy">
        <span class="pill"><span class="dot"></span> Now enrolling: AI Agent Course</span>
        <h1>Build AI agents that do real work. Learn how to build your own.</h1>
        <p class="lead">HanbitAI designs AI agents, websites, mobile apps and custom software for businesses, and teaches developers, students and founders to do the same.</p>
        <div class="hero-actions">
          <a routerLink="/contact" class="btn btn-primary">Start a project</a>
          <a routerLink="/ai-courses" class="btn btn-ghost">Explore AI courses</a>
        </div>
      </div>

      <div class="console" aria-label="Example of an AI agent working through a task">
        <div class="console-bar"><i></i><i></i><i></i><span>support-agent · running</span></div>
        <ol class="console-steps">
          <li><app-icon name="mail" /> New ticket: "Where is order 4821?"</li>
          <li><app-icon name="code" /> Looked up order in shipping database</li>
          <li><app-icon name="spark" /> Drafted a reply with tracking link</li>
          <li><app-icon name="check" /> Sent. Customer replied "thanks!"</li>
        </ol>
        <div class="console-foot"><span>Resolved in 14 seconds</span><span class="live">live</span></div>
      </div>
    </section>

    <section class="container section">
      <div class="service-strip">
        @for (s of services; track s.title) {
          <a [routerLink]="s.path" class="strip-item">
            <app-icon [name]="s.icon" /><div><strong>{{ s.title }}</strong><small>{{ s.text }}</small></div>
          </a>
        }
      </div>
    </section>

    <section class="container section">
      <h2 class="section-title">Why Build With HanbitAI?</h2>
      <div class="grid-3">
        @for (f of features; track f.title) {
          <article class="card feature">
            <span class="icon-badge"><app-icon [name]="f.icon" /></span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </article>
        }
      </div>
    </section>

    <section class="stats">
      <div class="container stats-grid">
        @for (s of stats; track s.label) {
          <div class="stat">
            @if (s.value !== null) {
              <strong class="stat-num"><span [appCounter]="s.value" [suffix]="s.suffix"></span></strong>
            } @else {
              <strong class="stat-num">{{ s.text }}</strong>
            }
            <span>{{ s.label }}</span>
          </div>
        }
      </div>
    </section>

    <!--<section class="container section">
      <h2 class="section-title">What clients and learners say</h2>
      <div class="grid-3">
        @for (t of testimonials(); track t.id) {
          <figure class="card quote">
            <div class="stars" [attr.aria-label]="t.rating + ' out of 5 stars'">
              @for (n of [1,2,3,4,5]; track n) { <span [class.on]="n <= t.rating">★</span> }
            </div>
            <blockquote>“{{ t.quote }}”</blockquote>
            <figcaption>
              @if (t.image_url) { <img [src]="t.image_url" [alt]="t.name" width="48" height="48" loading="lazy" /> }
              <div><strong>{{ t.name }}</strong><small>{{ t.role }}, {{ t.company }}</small></div>
            </figcaption>
          </figure>
        }
      </div>
    </section> -->

    <section class="container section">
      <div class="cta">
        <h2>Have an idea for an AI product, or want to learn to build one?</h2>
        <a routerLink="/contact" class="btn btn-light">Send an enquiry</a>
      </div>
    </section>
  `,
})
export class Home implements OnInit {
  private api = inject(Api);
  testimonials = signal<Testimonial[]>(FALLBACK);

  services = [
    { icon: 'bot', title: 'AI Agents', text: 'Agents that handle real tasks', path: '/ai-agents' },
    { icon: 'book', title: 'AI Courses', text: 'Live, project-based training', path: '/ai-courses' },
    { icon: 'globe', title: 'Websites', text: 'Fast, modern web apps', path: '/web-development' },
    { icon: 'phone', title: 'Mobile Apps', text: 'iOS and Android products', path: '/app-development' },
    { icon: 'sliders', title: 'Custom AI Software', text: 'Built around your workflow', path: '/contact' },
  ];
  features = [
    { icon: 'spark', title: 'AI First', text: 'Build products with AI at the core.' },
    { icon: 'stack', title: 'Modern Technology', text: 'Angular, Python, FastAPI, PostgreSQL and modern AI technologies.' },
    { icon: 'scale', title: 'Scalable Architecture', text: 'Build applications that can grow with your business.' },
    { icon: 'book', title: 'Practical Learning', text: 'Learn by building real-world AI projects.' },
    { icon: 'sliders', title: 'Custom Solutions', text: 'Every business has different requirements.' },
    { icon: 'flow', title: 'End-to-End Development', text: 'From idea to deployment, we help build the complete product.' },
  ];
  stats = [
    { value: 100, suffix: '+', text: '', label: 'AI Experiments' },
    { value: 50, suffix: '+', text: '', label: 'Projects Built' },
    { value: 1000, suffix: '+', text: '', label: 'Students & Learners' },
    { value: null, suffix: '', text: '24/7', label: 'AI-Powered Possibilities' },
  ];

  ngOnInit() {
    this.api.testimonials().subscribe({ next: t => t.length && this.testimonials.set(t), error: () => {} });
  }
}
