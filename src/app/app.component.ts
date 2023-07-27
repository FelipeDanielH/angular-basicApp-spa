import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'Heroes App';
  public counter: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 1;
  }

}
