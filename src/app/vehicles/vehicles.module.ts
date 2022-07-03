import { NgModule } from "@angular/core";
import { EquipmentsModule } from "../equipments/equipments.module";
import { MatModule } from "../shared/modules/mat.module";
import { SharedModule } from "../shared/modules/shared.module";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { VehiclesListComponent } from "./vehicles-list/vehicles-list.component";

@NgModule({
    declarations: [
        VehiclesListComponent,
        VehicleComponent
    ],
    imports: [
        MatModule,
        SharedModule,
        EquipmentsModule
    ],
    exports: [
        MatModule,
        VehiclesListComponent,
        VehicleComponent
    ]
})
export class VehiclesModule { }