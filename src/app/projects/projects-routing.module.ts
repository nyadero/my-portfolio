import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../shared/components/layout/layout.component";
import { ProjectPageComponent } from "./pages/project-page/project-page.component";
import { ProjectsComponent } from "./pages/projects/projects.component";

const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: ProjectsComponent
            },
            {
                path: ":id",
                component: ProjectPageComponent
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }