import { Routes } from "@angular/router";

import { AddFormGuard } from "./add-form.guard";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AddFormComponent } from "./table/add-form/add-form.component";
import { TableComponent } from "./table/table.component";

export const appRoutes: Routes = [
  { path: "", component: TableComponent,
    children: [
      { path: "form/create", component: AddFormComponent },
      { path: "form/edit/:id", component: AddFormComponent,  canActivate: [AddFormGuard]},
    ],
  },
  { path: "**", component: NotFoundComponent }];

