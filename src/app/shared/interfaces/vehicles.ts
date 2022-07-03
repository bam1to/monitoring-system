import { VehiclesTypes } from "./vehicles-types";

export interface Vehicles {
    id: number;
    name: string;
    type: VehiclesTypes;
    status?: number;
}
