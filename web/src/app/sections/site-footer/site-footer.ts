import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SITE } from '../../data/site-content';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer class="mt-5 border-t border-line px-6 py-7 text-center text-[0.85rem] text-muted">
      <!-- mb-3.5 對應原始頁全域 p { margin: 0 0 14px }，保持頁尾間距一致 -->
      <p class="mb-3.5">{{ site.copyright }}</p>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly site = SITE;
}
