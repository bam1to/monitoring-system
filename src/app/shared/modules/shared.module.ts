import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ColorPipe } from "../pipes/color.pipe";

@NgModule({
    declarations: [ColorPipe],
    imports: [CommonModule],
    exports: [CommonModule, ColorPipe]
})
export class SharedModule { };