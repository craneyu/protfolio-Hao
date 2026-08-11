import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CONTACT } from '../../data/site-content';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly contact = CONTACT;
}
