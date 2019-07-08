import { Injectable } from '@angular/core';
import { Mail } from '../../models/mail.interface';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MailService } from 'src/app/mail.service';

@Injectable()
export class MailViewResolve implements Resolve<Mail> {
  constructor(private mailService: MailService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.mailService.getMessage(route.params.id);
  }
}
