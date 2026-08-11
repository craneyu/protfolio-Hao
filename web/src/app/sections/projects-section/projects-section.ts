import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROJECTS, PROJECTS_INTRO } from '../../data/site-content';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects-section',
  imports: [SectionHeading],
  templateUrl: './projects-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly intro = PROJECTS_INTRO;
  protected readonly projects = PROJECTS;
}
