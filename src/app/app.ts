import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar';
import { Footer } from './shared/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <div class="bg-orbs" aria-hidden="true"></div>
    <app-navbar />
    <main><router-outlet /></main>
    <app-footer />
  `,
})
export class App {}
