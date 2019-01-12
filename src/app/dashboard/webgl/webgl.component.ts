import { Component, OnInit, Input } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-webgl",
  templateUrl: "./webgl.component.html",
  styleUrls: ["./webgl.component.scss", "./../dashboard.component.scss"]
})
export class WebGLComponent implements OnInit {
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
    $("#webgl-container").width = this.iframeSize * 0.9;
    $("#webgl-container").height = this.iframeSize * 0.7;
  }
}
