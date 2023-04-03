import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tougle',
  templateUrl: './tougle.component.html',
  styleUrls: ['./tougle.component.css'],
})
export class TougleComponent implements OnInit {
  @Input() checked = false;
  @Input() header!: string;
  @Input() content!: string;
  @Input() question!: string;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
