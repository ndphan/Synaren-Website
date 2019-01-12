import { Component, OnInit } from "@angular/core";
import { CloudChatService } from "./cloud-chat.service";

@Component({
  selector: "app-cloudchat",
  templateUrl: "./cloud-chat.component.html",
  styleUrls: ["./cloud-chat.component.scss", "./../dashboard.component.scss"],
  providers: [CloudChatService]
})
export class CloudChatComponent implements OnInit {
  imgs: string[];
  currentImg: string;
  loadImg: string;

  constructor(private cloudChatService: CloudChatService) {}

  ngOnInit() {
    this.imgs = this.cloudChatService.getImages();
    this.currentImg = this.imgs[0];
    this.loadImg = this.currentImg;
  }

  updateCurrentImg(img: string) {
    this.loadImg = img;
  }
}
