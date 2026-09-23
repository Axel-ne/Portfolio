import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-section',
  imports: [TranslatePipe],
  templateUrl: './landing-section.html',
  styleUrl: './landing-section.scss',
})
export class LandingSection {}