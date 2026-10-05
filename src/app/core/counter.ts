import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/** Counts from 0 to `target` once the element scrolls into view. */
@Directive({ selector: '[appCounter]' })
export class Counter implements OnInit, OnDestroy {
  target = input.required<number>({ alias: 'appCounter' });
  suffix = input('');
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngOnInit() {
    this.el.textContent = '0' + this.suffix();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.io?.disconnect();
      if (reduce) { this.el.textContent = this.target() + this.suffix(); return; }
      const start = performance.now(), dur = 1800, to = this.target();
      const tick = (t: number) => {
        const p = Math.min((t - start) / dur, 1);
        this.el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + this.suffix();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    this.io.observe(this.el);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}
