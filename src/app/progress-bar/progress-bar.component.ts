import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress(val: number) {
    console.log(val);
    this._progress = val;
  }
  @Input() bgColor: string = '#ccc';
  @Input() progressColor: string = 'green';
  private _progress = 60;
  get progress(): number {
    return this._progress;
  }
  constructor() {
    console.log('progress bar constructor', {
      bgColor: this.bgColor,
      progress: this.progress,
      progressColor: this.progressColor,
    });
  }
  ngOnInit(): void {
    console.log('progress bar init', {
      bgColor: this.bgColor,
      progress: this.progress,
      progressColor: this.progressColor,
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('progress bar changes', {
    //   bgColor: this.bgColor,
    //   progress: this.progress,
    //   progressColor: this.progressColor,
    // });
  }
}
