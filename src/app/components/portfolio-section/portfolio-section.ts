import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-section',
  imports: [TranslatePipe],
  templateUrl: './portfolio-section.html',
  styleUrl: './portfolio-section.scss',
})
export class PortfolioSection {}