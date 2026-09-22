import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills-section',
  imports: [TranslatePipe],
  templateUrl: './my-skills-section.html',
  styleUrl: './my-skills-section.scss',
})
export class MySkillsSection {}