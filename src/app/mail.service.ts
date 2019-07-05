import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './mail/models/mail.interface';

const ROOT_API: string = 'http://localhost:3000';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(ROOT_API + `/api/messages?folder=${folder}`);
  }
}
