import { Component } from '@angular/core';
import * as _ from 'lodash';
import { MatTabsModule } from '@angular/material/tabs';
import { AccountComponent } from '../dashboard/account/account.component';
import { CommonModule } from '@angular/common';
import { OurStoryComponent } from "./our-story/our-story.component";
import { TeamComponent } from "./team/team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [CommonModule, MatTabsModule, AccountComponent, OurStoryComponent, TeamComponent],
})
export class AboutComponent {
  someFunction() {
    return _.join(['Hello', 'World'], ' ');
  }
}
