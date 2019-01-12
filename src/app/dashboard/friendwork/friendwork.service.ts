import { Injectable } from "@angular/core";

@Injectable()
export class FriendWorkService {
  constructor() {}

  getImages() {
    return Array(8)
      .fill(0)
      .map((_, idx) => "assets/friendwork/" + (idx + 1) + ".png");
  }
}
