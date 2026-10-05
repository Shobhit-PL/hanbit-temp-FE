import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <section class="page-hero container">
      <h1>We build with AI, and we teach it.</h1>
      <p class="lead">HanbitAI is an AI and software development company. We help businesses, developers, students and entrepreneurs learn AI, build intelligent agents and ship modern digital products.</p>
    </section>
    <section class="container section">
      <div class="grid-3">
        <article class="card"><h3>Build</h3><p>AI agents, websites, mobile apps and custom software, designed and delivered end to end.</p></article>
        <article class="card"><h3>Learn</h3><p>Project-based AI courses where learners finish with something they can show.</p></article>
        <article class="card"><h3>Automate</h3><p>We turn repetitive work into reliable, monitored automation your team can trust.</p></article>
      </div>
      <div class="cta" style="margin-top:48px">
        <h2>Want to work with us or join the team?</h2>
        <a routerLink="/contact" class="btn btn-light">Get in touch</a>
      </div>
    </section>
  `,
})
export class About {}
