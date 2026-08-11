import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROCESS_INTRO, PROCESS_STEPS } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-process-section',
  imports: [SectionHeading],
  templateUrl: './process-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessSection {
  protected readonly intro = PROCESS_INTRO;
  protected readonly steps = PROCESS_STEPS;
}
