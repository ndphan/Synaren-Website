import { FriendWorkComponent } from "./friendwork/friendwork.component";
import { WebGLComponent } from "./webgl/webgl.component";
import { ImageViewerComponent } from "./imageviewer/imageviewer.component";
import { DocumentEditorComponent } from "./document/documenteditor.component";
import { iosComponent } from "./ios/ios.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { SpaceDuckComponent } from "./space-duck/space-duck.component";
import { CloudChatComponent } from "./cloud-chat/cloud-chat.component";

export class DashboardConstants {
  public static tabs : any[] = [
    {
      name: "Cloud Chat",
      path: "cloudchat",
      pathMatch: "full",
      component: CloudChatComponent
    },
    {
      name: "Friendwork",
      path: "friendwork",
      pathMatch: "full",
      component: FriendWorkComponent
    },
    {
      name: "React 360° image viewer",
      path: "image-viewer",
      pathMatch: "full",
      component: ImageViewerComponent
    },
    {
      name: "Space Duck",
      path: "space-duck",
      pathMatch: "full",
      component: SpaceDuckComponent
    },
    {
      name: "3D webGL game",
      path: "3D-webgl",
      pathMatch: "full",
      component: WebGLComponent
    },
    {
      name: "Document Editor",
      path: "doc-editor",
      pathMatch: "full",
      component: DocumentEditorComponent
    },
    {
      name: "Restaurant Template",
      path: "restaurant",
      pathMatch: "full",
      component: RestaurantComponent
    },
    {
      name: "iOS game engine",
      path: "ios-game",
      pathMatch: "full",
      component: iosComponent
    },
  ];
}
