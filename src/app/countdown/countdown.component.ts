import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  startCount = 5;
  inputCountdown: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  subtract(): void {
    for (let i = 0; i < 5; i++) {
      window.setTimeout(() => console.log(this.startCount), 1000);
      this.startCount--;
      console.log('function ran');
      console.log(this.startCount);
    }
  }

  countUpFunc(): void {
    const task = async () => {
      for (let i = 0; i < 5; i++) {
        await new Promise(r => setTimeout(r, 1000));
        this.startCount--;
        console.log(this.startCount);
      }
    };
    task();
  }

  update(value: string) {
    this.inputCountdown = parseInt(value);
    const task = async () => {
      for (let i = 0; i < 5; i++) {
        await new Promise(r => setTimeout(r, 1000));
        this.inputCountdown--;
        console.log(this.inputCountdown);
      }
    };
    task();
  }

}
