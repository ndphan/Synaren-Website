import { NgModule, Provider } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { FriendWorkComponent } from "./friendwork/friendwork.component";
import { WebGLComponent } from "./webgl/webgl.component";
import { ImageViewerComponent } from "./imageviewer/imageviewer.component";
import { DocumentEditorComponent } from "./document/documenteditor.component";
import { iosComponent } from "./ios/ios.component";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { Page404Component } from './page-404/page-404.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SpaceDuckComponent } from './space-duck/space-duck.component';
import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
import { CloudChatComponent } from "./cloud-chat/cloud-chat.component";

// Provide window object so as to not break SSR if using universal
export const getWindow = () => window;
export const providers: Provider[] = [
  { provide: WindowRef, useFactory: (getWindow) }
];


@NgModule({
  imports: [BrowserModule, DashboardRoutingModule, InViewportModule.forRoot(providers)],
  exports: [],
  declarations: [
    DashboardComponent,
    WebGLComponent,
    ImageViewerComponent,
    FriendWorkComponent,
    DocumentEditorComponent,
    iosComponent,
    RestaurantComponent,
    Page404Component,
    WelcomeComponent,
    AboutMeComponent,
    SpaceDuckComponent,
    CloudChatComponent
  ],
  providers: []
})
export class DashboardModule {}
