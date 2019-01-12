import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardConstants } from "./dashboard.constants";
import { Page404Component } from './page-404/page-404.component';

let dashChild = DashboardConstants.tabs;

const routes: Routes = [
  // { path: "n", redirectTo: "n", pathMatch: "full" },
  // { path: "", redirectTo: "n", pathMatch: "full" },
  {
    path: "",
    component: DashboardComponent,
    pathMatch: "full",
    // children: dashChild
  },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}

