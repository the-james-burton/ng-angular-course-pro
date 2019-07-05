import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Mail } from '../../models/mail.interface';
import { MailService } from 'src/app/mail.service';

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.mailService.getFolder(route.params.name);
  }
}
