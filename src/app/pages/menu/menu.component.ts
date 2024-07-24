import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  tab = 'all';
  menuItemList = [
    {
      img: '../../assets/fried-eggs.png',
      price: 9.99,
      name: 'Fried Eggs',
      content: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      img: '../../assets/fried-eggs.png',
      price: 9.99,
      name: 'Fried Eggs',
      content: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      img: '../../assets/fried-eggs.png',
      price: 9.99,
      name: 'Fried Eggs',
      content: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
    {
      img: '../../assets/fried-eggs.png',
      price: 9.99,
      name: 'Fried Eggs',
      content: 'Made with eggs, lettuce, salt, oil and other ingredients.',
    },
  ];
}
