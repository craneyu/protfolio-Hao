import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ABOUT_INTRO, ABOUT_PARAGRAPHS, VALUE_PROPS } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-about-section',
  imports: [SectionHeading],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  protected readonly intro = ABOUT_INTRO;
  protected readonly paragraphs = ABOUT_PARAGRAPHS;
  protected readonly valueProps = VALUE_PROPS;
}
