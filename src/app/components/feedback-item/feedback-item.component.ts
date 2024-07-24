import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrl: './feedback-item.component.css',
})
export class FeedbackItemComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) content: string = '';
  @Input({ required: true }) name: string = '';
  @Input({ required: true }) address: string = '';
  @Input({ required: true }) avatar: string = '';
}
