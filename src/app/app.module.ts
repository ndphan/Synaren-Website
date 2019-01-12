import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { RouterService } from "./router.service";
import { HttpService } from "./http.service";

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    DashboardModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [RouterService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
