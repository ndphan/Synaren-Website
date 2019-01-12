import { Component, OnInit } from "@angular/core";
import { ImageViewerService } from "./imageviewer.service";


declare var $ :any;

@Component({
  selector: "app-imageviewer",
  templateUrl: "./imageviewer.component.html",
  styleUrls: ["./imageviewer.component.scss", "./../dashboard.component.scss"],
  providers: [ImageViewerService]
})
export class ImageViewerComponent implements OnInit {
  iframeSize: number;

  constructor(private imageViewerService: ImageViewerService) {
    this.iframeSize = Math.min(
      window.innerWidth || document.body.clientWidth,
      700
    );
  }

  ngOnInit() {
    this.iframeSize = Math.min($("#frame-container").width(), this.iframeSize);
  }

  ngAfterViewInit() {}

  onResize() {
    this.iframeSize = Math.min(
      $("#frame-container").width(),
      Math.min(window.innerWidth || document.body.clientWidth, 700)
    );
    $("#iframe").width = this.iframeSize * 0.9;
    $("#iframe").height = this.iframeSize * 0.7;
  }
}
