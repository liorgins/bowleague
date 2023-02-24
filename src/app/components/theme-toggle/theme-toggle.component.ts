import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {

  
  toggleMode($event: Event) {

    const bodyElement = document.body;

    const toggle = $event.target as HTMLInputElement;
    toggle.checked ?
      bodyElement.classList.add('dark') :
      bodyElement.classList.remove('dark');
  }
}
