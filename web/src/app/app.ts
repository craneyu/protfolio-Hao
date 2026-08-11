import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AboutSection } from './sections/about-section/about-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { HeroSection } from './sections/hero-section/hero-section';
import { HighlightsSection } from './sections/highlights-section/highlights-section';
import { ProcessSection } from './sections/process-section/process-section';
import { ProjectsSection } from './sections/projects-section/projects-section';
import { ServicesSection } from './sections/services-section/services-section';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { TechSection } from './sections/tech-section/tech-section';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    ServicesSection,
    TechSection,
    HighlightsSection,
    ProjectsSection,
    ProcessSection,
    ContactSection,
    SiteFooter,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
