import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-task',
  standalone: true,
  imports: [],
  templateUrl: './big-task.component.html',
})
export class BigTaskComponent {
  counter = 0;
  worker!: Worker;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 500);
  }

  findPrimes(limit: number): number[] {
    const primes = [];
    const sieve = new Array(limit + 1).fill(true);

    for (let i = 2; i <= limit; i++) {
      console.log(i);
      if (sieve[i]) {
        primes.push(i);
        for (let j = i * i; j <= limit; j += i) {
          sieve[j] = false;
        }
      }
    }

    return primes;
  }

  handleHeavyComputation() {
    // Създайте Web Worker, който извършва тежка изчислителна операция - намиране на големи прости числа до определен лимит.
    console.log(this.findPrimes(1000000));
  }
}
