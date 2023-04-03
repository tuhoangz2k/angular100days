import { Component, Input } from '@angular/core';
@Component({
  selector: 'hello1',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @Input()
  name!: string;
  ngOnInit() {
    console.log('init component');
  }
  ngOnDestroy() {
    console.log('destroy component');
  }
}
