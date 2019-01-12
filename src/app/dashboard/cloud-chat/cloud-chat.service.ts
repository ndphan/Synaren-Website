import { Injectable } from "@angular/core";

@Injectable()
export class CloudChatService {
  constructor() {}

  getImages() {
    return Array(2)
      .fill(0)
      .map((_, idx) => "assets/cloud-chat/" + (idx + 1) + ".png");
  }
}
