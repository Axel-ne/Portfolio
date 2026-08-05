import { Component } from '@angular/core';
import { LandingSection } from '../landing-section/landing-section';
import { AboutMeSection } from '../about-me-section/about-me-section';
import { MySkillsSection } from '../my-skills-section/my-skills-section';
import { PortfolioSection } from '../portfolio-section/portfolio-section';
import { References } from '../references/references';
import { ContactSectionn } from '../contact-sectionn/contact-sectionn';

@Component({
  selector: 'app-home',
  imports: [LandingSection, AboutMeSection, MySkillsSection, PortfolioSection, References, ContactSectionn],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
