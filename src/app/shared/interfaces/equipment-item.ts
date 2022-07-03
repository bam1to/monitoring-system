import { Problems } from "./problems";

export interface EquipmentItem {
    id: number;
    equipmentId: number;
    name: string;
    description: string;
    problems: Problems
}
