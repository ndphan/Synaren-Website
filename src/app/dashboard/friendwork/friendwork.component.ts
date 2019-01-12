import { Component, OnInit } from "@angular/core";
import { FriendWorkService } from "./friendwork.service";

@Component({
  selector: "app-friendwork",
  templateUrl: "./friendwork.component.html",
  styleUrls: ["./friendwork.component.scss", "./../dashboard.component.scss"],
  providers: [FriendWorkService]
})
export class FriendWorkComponent implements OnInit {
  imgs: string[];
  currentImg: string;
  loadImg: string;

  constructor(private friendWorkService: FriendWorkService) {}

  ngOnInit() {
    this.imgs = this.friendWorkService.getImages();
    this.currentImg = this.imgs[0];
    this.loadImg = this.currentImg;
  }

  updateCurrentImg(img: string) {
    this.loadImg = img;
  }
}
