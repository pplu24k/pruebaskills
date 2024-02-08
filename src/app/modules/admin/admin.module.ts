import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from "../../shared/shared.module";
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameSearchComponent } from './components/game-search/game-search.component';
import { TableFormComponent } from './components/table-form/table-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AdminComponent,
        GameFormComponent,
        GameListComponent,
        GameSearchComponent,
        TableFormComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        FormsModule 
    ]
})
export class AdminModule { }
