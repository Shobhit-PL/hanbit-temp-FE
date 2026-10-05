import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Testimonial { id: number; name: string; role: string; company: string; quote: string; rating: number; image_url?: string | null; }
export interface EnquiryPayload { name: string; email: string; phone?: string; service: string; budget?: string; message: string; }

@Injectable({ providedIn: 'root' })
export class Api {
  private http = inject(HttpClient);
  testimonials() { return this.http.get<Testimonial[]>(`${environment.apiUrl}/testimonials`); }
  sendEnquiry(body: EnquiryPayload) { return this.http.post(`${environment.apiUrl}/enquiries`, body); }
}
