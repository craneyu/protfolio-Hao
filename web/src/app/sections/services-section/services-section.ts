import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SERVICES, SERVICES_INTRO } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-services-section',
  imports: [SectionHeading],
  templateUrl: './services-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  protected readonly intro = SERVICES_INTRO;
  protected readonly services = SERVICES;
}
