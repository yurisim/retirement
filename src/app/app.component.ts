import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { EventsComponent } from './(events)/events.component';


@Component({
  standalone: true,
  imports: [RouterModule, MatIconModule, MatTooltipModule, MatButtonModule, MatMenuModule,
    MatBottomSheetModule],
  selector: 'retirement-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CMSgt Tracy L. Massey Retirement';

  constructor(private eventSheet: MatBottomSheet) {}

  openEventsSheet(): void {
    this.eventSheet.open(EventsComponent);
  }
}
