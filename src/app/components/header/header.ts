import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  currentLanguage: 'de' | 'en' = 'de';

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: 'de' | 'en') {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }
}