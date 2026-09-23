import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-section',
  imports: [TranslatePipe],
  templateUrl: './landing-section.html',
  styleUrl: './landing-section.scss',
})
export class LandingSection {
  translate = inject(TranslateService);
  get isGerman(): boolean {
    return this.translate.currentLang() === 'de';
  }
}