import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.css',
})
export class ServiceItemComponent {
  @Input({ required: true }) imageURL: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) content: string = '';
}
