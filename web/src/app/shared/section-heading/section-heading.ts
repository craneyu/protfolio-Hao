import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SectionIntro } from '../../data/site-content';

/** 各區塊共用的置中標題：eyebrow、主標、漸層分隔線、選用的說明文字 */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly intro = input.required<SectionIntro>();
}
