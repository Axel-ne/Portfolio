import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { LandingSection } from './components/landing-section/landing-section';
import { AboutMeSection } from './components/about-me-section/about-me-section';
import { MySkillsSection } from './components/my-skills-section/my-skills-section';
import { PortfolioSection } from './components/portfolio-section/portfolio-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LandingSection, AboutMeSection, MySkillsSection, PortfolioSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
