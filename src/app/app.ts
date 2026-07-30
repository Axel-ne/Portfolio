import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { LandingSection } from './components/landing-section/landing-section';
import { AboutMeSection } from './components/about-me-section/about-me-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LandingSection, AboutMeSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
