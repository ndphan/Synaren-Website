import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-documenteditor",
  templateUrl: "./documenteditor.component.html",
  styleUrls: ["./documenteditor.component.scss", "./../dashboard.component.scss"]
})
export class DocumentEditorComponent implements OnInit {
  iframeSize: number;

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
    $("#doc-editor-frame").width = this.iframeSize * 0.9;
    $("#doc-editor-frame").height = this.iframeSize * 0.7;
  }
}
