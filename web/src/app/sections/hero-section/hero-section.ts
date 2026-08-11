import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO } from '../../data/site-content';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  protected readonly hero = HERO;
}
