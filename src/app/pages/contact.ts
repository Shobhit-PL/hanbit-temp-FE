import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../core/api';
import { Icon } from '../shared/icons';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon],
  template: `
    <section class="page-hero container">
      <h1>Tell us what you want to build or learn</h1>
      <p class="lead">Send an enquiry and we will reply within one business day.</p>
    </section>

    <section class="container section contact-grid">
      <!--<form class="card form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
        <div class="row">
          <label>Name
            <input formControlName="name" autocomplete="name" />
            @if (show('name')) { <small class="err">Enter your name (at least 2 characters).</small> }
          </label>
          <label>Email
            <input type="email" formControlName="email" autocomplete="email" />
            @if (show('email')) { <small class="err">Enter a valid email address.</small> }
          </label>
        </div>
        <div class="row">
          <label>Phone
            <input type="tel" formControlName="phone" autocomplete="tel" />
          </label>
          <label>Service
            <select formControlName="service">
              <option value="" disabled>Select a service</option>
              @for (s of services; track s) { <option [value]="s">{{ s }}</option> }
            </select>
            @if (show('service')) { <small class="err">Choose a service.</small> }
          </label>
        </div>
        <label>Budget
          <select formControlName="budget">
            <option value="">Prefer not to say</option>
            @for (b of budgets; track b) { <option [value]="b">{{ b }}</option> }
          </select>
        </label>
        <label>Message
          <textarea rows="5" formControlName="message" placeholder="What are you trying to build or learn?"></textarea>
          @if (show('message')) { <small class="err">Tell us a little more (at least 10 characters).</small> }
        </label>

        <button class="btn btn-primary" type="submit" [disabled]="status() === 'sending'">
          {{ status() === 'sending' ? 'Sending…' : 'Send Enquiry' }}
        </button>
        @if (status() === 'sent') { <p class="ok" role="status">Enquiry sent. We will reply within one business day.</p> }
        @if (status() === 'error') { <p class="err" role="alert">The enquiry did not send. Check your connection and try again.</p> }
      </form>-->

      <aside class="card info">
        <h3>Contact details</h3>
        <ul>
          <!-- <li><app-icon name="mail" /><a href="mailto:hello@hanbitai.com">hello@hanbitai.com</a></li> -->
          <li><app-icon name="call" /><a href="tel:+910000000000">+91 8285894079</a></li>
          <li><app-icon name="pin" /><span>Pune, Maharashtra, India</span></li>
        </ul>
        <!-- <h3>Follow us</h3>
        <div class="socials">
          @for (s of socials; track s.name) {
            <a [href]="s.href" [attr.aria-label]="s.name" target="_blank" rel="noopener"><app-icon [name]="s.icon" /></a>
          }
        </div> -->
      </aside>
    </section>
  `,
})
export class Contact {
  private fb = inject(FormBuilder);
  private api = inject(Api);
  status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  services = ['AI Agent Creation', 'AI Course', 'Website Development', 'Mobile App Development', 'Custom AI Solution'];
  budgets = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $20,000', '$20,000+'];
  socials = [
    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { name: 'X', icon: 'x', href: 'https://x.com' },
    { name: 'GitHub', icon: 'github', href: 'https://github.com' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
  ];

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    service: ['', Validators.required],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  show(name: 'name' | 'email' | 'service' | 'message') {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    const v = this.form.getRawValue();
    this.api.sendEnquiry({ ...v, phone: v.phone || undefined, budget: v.budget || undefined }).subscribe({
      next: () => { this.status.set('sent'); this.form.reset({ service: '' }); },
      error: () => this.status.set('error'),
    });
  }
}
