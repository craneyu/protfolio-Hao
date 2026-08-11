import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HIGHLIGHTS, HIGHLIGHTS_INTRO } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-highlights-section',
  imports: [SectionHeading],
  templateUrl: './highlights-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsSection {
  protected readonly intro = HIGHLIGHTS_INTRO;
  protected readonly highlights = HIGHLIGHTS;
}
