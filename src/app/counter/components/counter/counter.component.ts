import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent{
  constructor() { }

  public counter: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 1;
  }
}
