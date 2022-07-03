import { NgModule } from "@angular/core";
import { MatModule } from "../shared/modules/mat.module";
import { SharedModule } from "../shared/modules/shared.module";
import { EquipmentsListComponent } from './equipments-list/equipments-list.component';
import { EquipmentItemsComponent } from './equipment-items/equipment-items.component';

@NgModule({
    declarations: [
        EquipmentsListComponent,
        EquipmentItemsComponent,
    ],
    imports: [
        MatModule,
        SharedModule
    ],
    exports: [
        EquipmentsListComponent,
        EquipmentItemsComponent
    ]
})
export class EquipmentsModule { };