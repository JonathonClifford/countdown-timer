import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  startCount = 5;
  inputCountdown: number = 0;
  inputCountdownTimerFormat: string = "00:00:00";

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
    var count:number = this.inputCountdown;
    const task = async () => {
      for (let i = 0; i < count; i++) {
        await new Promise(r => setTimeout(r, 1000));
        this.inputCountdown--;
        console.log(this.inputCountdown);
      }
    };
    task();
  }

  updateWithMinutes(minutes: string, seconds: string) {
    this.inputCountdown = parseInt(minutes) * 60 + parseInt(seconds);
    var count:number = this.inputCountdown;
    const task = async () => {
      for (let i = 0; i < count; i++) {
        await new Promise(r => setTimeout(r, 1000));
        this.inputCountdown--;
        console.log(this.inputCountdown);
      }
    };
    task();
  }

  updateWithHours(hours: string, minutes: string, seconds: string) {
    var hoursNum: number = parseInt(hours);
    var minutesNum: number = parseInt(minutes);
    var secondsNum: number = parseInt(seconds);
    this.inputCountdown = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    var count:number = this.inputCountdown;
    const task = async () => {
      for (let i = 0; i < count; i++) {
        await new Promise(r => setTimeout(r, 1000));
        this.inputCountdown--;
        this.inputCountdownTimerFormat = this.formatTimerString(this.inputCountdown);
        console.log(this.inputCountdown);
      }
    };
    task();
  }

  formatTimerString(seconds: number): string {
    let numHours: number = Math.floor(seconds / 3600);
    let numMinutes: number = Math.floor((seconds - (numHours * 3600)) / 60);
    let numSeconds: number = Math.floor(seconds - (numHours * 3600 + numMinutes * 60));
    return this.formatDoubleCharacter(numHours) + ":" +
      this.formatDoubleCharacter(numMinutes) + ":" +
      this.formatDoubleCharacter(numSeconds);
  }

  formatDoubleCharacter(value: number): string {
    if (value < 10) {
      return "0" + value.toString();
    } else {
      return value.toString();
    }
  }

}
