import { Component, ViewChild } from '@angular/core';
import { TougleComponent } from './tougle/tougle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('tougleC') tougleC!: TougleComponent;

  title = 'angular100days';
  task = 'task 1';
  wibu = {
    name: 'rach',
    age: 16,
  };
  onHandleChange(event: Event) {
    const e = event.target as HTMLInputElement;
    this.wibu.name = e.value;
  }
  onChange(event: Event) {
    const e = event.target as HTMLInputElement;
    this.task = e.value;
  }
  onChangeAge(event: Event, n: number) {
    this.wibu.age = this.wibu.age + n;
  }
  setName() {
    this.wibu.name = 'nguyen van b';
  }
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[] = [];
  tags = ['angular', 'react', 'vue', 'nest'];
  isDanger = true;
  changeDanger() {
    this.isDanger = !this.isDanger;
  }
  questions = {
    question1: true,
    question2: false,
  };

  currentProgress = 80;
  ngAfterViewInit() {
    console.log(this.tougleC);
  }
}
