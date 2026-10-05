import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Icon } from '../shared/icons';

interface ServiceContent {
  icon: string; title: string; intro: string; cta: string;
  items: { title: string; text: string }[];
  steps: { title: string; text: string }[];
}

const CONTENT: Record<string, ServiceContent> = {
  agents: {
    icon: 'bot', title: 'AI Agents that handle real work',
    intro: 'We design, build and deploy agents that read your data, use your tools and finish tasks, with guardrails and a human in the loop where it matters.',
    cta: 'Plan an AI agent',
    items: [
      { title: 'Customer support agents', text: 'Answer questions, look up orders and hand off to your team with full context.' },
      { title: 'Internal workflow agents', text: 'Automate reports, approvals, data entry and follow-ups across your tools.' },
      { title: 'Research and analysis agents', text: 'Gather, summarise and compare information from your documents and the web.' },
      { title: 'Sales and lead agents', text: 'Qualify enquiries, book calls and keep your CRM up to date.' },
    ],
    steps: [
      { title: 'Map the task', text: 'We watch how the work is done today and pick what is safe to automate.' },
      { title: 'Prototype in a week', text: 'A working agent on your real data, so you can judge it by results.' },
      { title: 'Add tools and guardrails', text: 'Connect your systems, set limits, and log every action.' },
      { title: 'Deploy and monitor', text: 'Launch, measure accuracy and cost, and keep improving.' },
    ],
  },
  courses: {
    icon: 'book', title: 'AI courses for people who want to build',
    intro: 'Live online classes where every lesson ends with something you built. Learn at the pace of a working professional, with feedback from engineers who ship AI products.',
    cta: 'Ask about the next batch',
    items: [
      { title: 'AI Agent Course', text: 'Build agents with tools, memory and evaluation, from a first prototype to deployment.' },
      { title: 'Prompt Engineering', text: 'Write prompts that are reliable, testable and easy to maintain.' },
      { title: 'AI for Developers', text: 'Add AI features to Angular and FastAPI apps with proper architecture.' },
      { title: 'Corporate training', text: 'Custom workshops that train your team on your own use cases.' },
    ],
    steps: [
      { title: 'Choose a track', text: 'Beginner, developer or business, depending on your goal.' },
      { title: 'Learn live', text: 'Small online classes with recordings and notes.' },
      { title: 'Build a project', text: 'Every learner finishes with a portfolio-ready project.' },
      { title: 'Get feedback', text: 'Code and design reviews before you share your work.' },
    ],
  },
  web: {
    icon: 'globe', title: 'Websites and web apps built to grow',
    intro: 'From marketing sites to full dashboards, we build fast, accessible web applications with Angular on the front and Python FastAPI with PostgreSQL behind it.',
    cta: 'Plan a website',
    items: [
      { title: 'Company websites', text: 'Clear, fast sites that explain what you do and turn visitors into enquiries.' },
      { title: 'Web applications', text: 'Dashboards, portals and internal tools with secure login and roles.' },
      { title: 'AI-powered features', text: 'Chat, search, summaries and automation built into your product.' },
      { title: 'APIs and integrations', text: 'REST APIs and connections to payments, CRMs and other systems.' },
    ],
    steps: [
      { title: 'Discover', text: 'Goals, users and scope agreed in writing.' },
      { title: 'Design', text: 'Clickable designs you approve before we code.' },
      { title: 'Build', text: 'Weekly demos on a staging site you can open.' },
      { title: 'Launch and support', text: 'Deployment, monitoring and ongoing improvements.' },
    ],
  },
  app: {
    icon: 'phone', title: 'Mobile apps people keep using',
    intro: 'We build mobile apps for iOS and Android with a clean experience, a reliable backend and AI features where they genuinely help.',
    cta: 'Plan a mobile app',
    items: [
      { title: 'Cross-platform apps', text: 'One codebase for iOS and Android, so you launch sooner.' },
      { title: 'AI assistants in your app', text: 'In-app chat, recommendations and automation.' },
      { title: 'Backend and APIs', text: 'FastAPI services with PostgreSQL that scale with your users.' },
      { title: 'Store launch', text: 'Help with App Store and Google Play submission.' },
    ],
    steps: [
      { title: 'Define the first release', text: 'The smallest app that proves your idea.' },
      { title: 'Prototype', text: 'A tappable prototype tested with real users.' },
      { title: 'Build and test', text: 'Two-week sprints with a build you can install.' },
      { title: 'Launch and grow', text: 'Release, analytics and the next round of features.' },
    ],
  },
};

@Component({
  selector: 'app-service-page',
  imports: [RouterLink, Icon],
  template: `
    <section class="page-hero container">
      <span class="icon-badge lg"><app-icon [name]="c().icon" /></span>
      <h1>{{ c().title }}</h1>
      <p class="lead">{{ c().intro }}</p>
      <a routerLink="/contact" class="btn btn-primary">{{ c().cta }}</a>
    </section>

    <section class="container section">
      <h2 class="section-title">What we offer</h2>
      <div class="grid-2">
        @for (i of c().items; track i.title) {
          <article class="card"><h3>{{ i.title }}</h3><p>{{ i.text }}</p></article>
        }
      </div>
    </section>

    <section class="container section">
      <h2 class="section-title">How it works</h2>
      <ol class="steps">
        @for (s of c().steps; track s.title) {
          <li class="card"><h3>{{ s.title }}</h3><p>{{ s.text }}</p></li>
        }
      </ol>
    </section>
  `,
})
export class ServicePage {
  private route = inject(ActivatedRoute);
  c = computed(() => CONTENT[this.route.snapshot.data['key']] ?? CONTENT['agents']);
}
