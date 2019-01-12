import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-space-duck',
  templateUrl: './space-duck.component.html',
  styleUrls: ['./space-duck.component.scss', "./../dashboard.component.scss"]
})
export class SpaceDuckComponent implements OnInit {
  iframeSize: number;

  @Input() inView: boolean;

  constructor() {
    this.iframeSize = Math.min(
      window.innerWidth || document.body.clientWidth,
      700
    );
  }

  ngOnInit() {
    this.iframeSize = Math.min($("#frame-container").width(), this.iframeSize);
  }
  

  onResize() {
    this.iframeSize = Math.min(
      $("#frame-container").width(),
      Math.min(window.innerWidth || document.body.clientWidth, 700)
    );
    $("#game-container").width = this.iframeSize * 0.9;
    $("#game-container").height = this.iframeSize * 0.7;
  }
}
