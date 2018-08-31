import { NgModule } from "@angular/core";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListRouting } from "./shopping-list-routing.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoppingListRouting
    ]
})

export class ShoppingListModule {}