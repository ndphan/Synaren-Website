import { Injectable } from "@angular/core";
import { DashboardConstants } from "./dashboard.constants";

@Injectable()
export class DashboardService {
  getTabs() {
    return DashboardConstants.tabs;
  }

  getMenuBar() {
    return [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ndphan/",
        icon: "fa fa-linkedin-square",
        style: {
          padding: "0",
          marginTop: "auto",
          marginBottom: "auto",
          fontSize: "2rem",
          paddingRight: "5px"
        }
      }
    ];
  }
}
