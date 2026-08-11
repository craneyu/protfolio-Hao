import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TECH_GROUPS, TECH_INTRO, type TagTone } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

const TONE_CLASS: Record<TagTone, string> = {
  blue: 'tag-blue',
  teal: 'tag-teal',
  gold: 'tag-gold',
};

@Component({
  selector: 'app-tech-section',
  imports: [SectionHeading],
  templateUrl: './tech-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechSection {
  protected readonly intro = TECH_INTRO;
  protected readonly groups = TECH_GROUPS;

  protected tagClass(tone: TagTone): string {
    return `tag ${TONE_CLASS[tone]}`;
  }
}
