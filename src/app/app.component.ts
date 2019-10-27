import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedOption = 'recipe';

  onNavigate(optionSelected: string) {
    this.loadedOption = optionSelected;
  }
}
