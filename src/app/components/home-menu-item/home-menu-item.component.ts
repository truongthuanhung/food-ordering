import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrl: './home-menu-item.component.css',
})
export class HomeMenuItemComponent {
  @Input({ required: true }) iconType: string = 'tea';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) content: string = '';
}
