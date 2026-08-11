import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NAV_LINKS, SITE } from '../../data/site-content';

/**
 * 置頂導覽列。原始頁用 checkbox + :has() 做純 CSS 漢堡選單，
 * 這裡改由 signal 控制開合，行為等價但可存取性更好（button + aria-expanded）。
 */
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
