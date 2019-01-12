import { Component, OnInit, HostListener } from "@angular/core";
import { DashboardService } from "./dashboard.service";
import { RouterService } from "../router.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  tabs: any[];
  menuBars: any[];
  shownViewPort: string = "welcome";
  inViewPort = {};
  showDropdown: boolean = false;
  
  showBinding: any = {
    welcome: {shown: true, point: 0},
    cloudchat:  {shown: true, point: 6},
    webgl: {shown: false, point: 3},
    imageviewer: {shown: false, point: 2},
    spaceduck:  {shown: true, point: 1},
    friendwork:  {shown: true, point: 1},
    documenteditor:  {shown: false, point: 4},
    ios:  {shown: false, point: 5},
    aboutme:  {shown: true, point: 6},
  }

  point = 1;
  lazyLoadTime = 200;


  constructor(
    private dashboardService: DashboardService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.tabs = this.dashboardService.getTabs();
    this.menuBars = this.dashboardService.getMenuBar();
  }

  scrollTo(target : HTMLElement){
    target.scrollIntoView();
  } 

  onInViewportChange(inViewport: boolean, showBinding: string) {
    
    this.inViewPort[showBinding] = inViewport;
    // if removed from view port then select the next viewport in view
    if(this.shownViewPort === showBinding && inViewport === false){
      for (const section in this.inViewPort) {
        if (this.inViewPort.hasOwnProperty(section)) {
          const inView = this.inViewPort[section];
          if(inView === true){
            this.shownViewPort = section;
            break;
          }
        }
      }
    } else if(inViewport === true) {
      this.shownViewPort = showBinding;
    }

    // if(inViewport === true){
    //   // lazy load the sections past
    //   setTimeout(()=>{
    //     let newPoint = Math.max(this.showBinding[showBinding].point, this.point);
    //     this.point = newPoint;
    //     Object.values(this.showBinding).filter(e => !e.shown).forEach(bind => {
    //       if(bind.point <= newPoint){
    //         bind.shown = true;
    //       }
    //     });
    //   }, this.lazyLoadTime);
    // }
    this.showBinding[showBinding].shown = inViewport || this.showBinding[showBinding].shown;
  }
}
