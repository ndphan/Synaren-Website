import { Component, OnInit } from '@angular/core';
import { RouterService } from "./../../router.service";

@Component({
  selector: 'page-404',
  templateUrl: './page-404.component.html',
  styleUrls: ['./page-404.component.scss']
})
export class Page404Component implements OnInit {

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }

}
