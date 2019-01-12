import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable()
export class RouterService {
  constructor(private location: Location, private router: Router) {}

  pushHash(hash: string) {
    this.router.navigate([""], { fragment: hash });
  }
  pushRoute(path: string) {
    this.router.navigate([document.location + "/" + path]);
  }

  pushRouteBase(path: string, base: string) {
    let fullPath = this.location.path();
    let loc = fullPath.substr(0, fullPath.indexOf(base) + base.length);
    this.router.navigate([loc + "/" + path]);
  }
}
