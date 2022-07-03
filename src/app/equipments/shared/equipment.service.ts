import { Injectable } from '@angular/core';
import { EquipmentItem } from 'src/app/shared/interfaces/equipment-item';
import { EquipmentList } from 'src/app/shared/interfaces/equipment-list';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  mockEquipmentList: EquipmentList[] = [
    { id: 1, name: 'equpment 1', vehicleId: 1 },
    { id: 2, name: 'equipment 2', vehicleId: 1 },
    { id: 3, name: 'equipment 3', vehicleId: 2 },
    { id: 4, name: 'equipment 4', vehicleId: 3 }
  ];

  mockEquipmentItems: EquipmentItem[] = [
    {
      id: 1,
      equipmentId: 1,
      name: 'component 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
      problems: { warnings: [], errors: [] }
    }, {
      id: 2,
      equipmentId: 2,
      name: 'component 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
      problems: { warnings: ['warning'], errors: [] }
    }, {
      id: 3,
      equipmentId: 3,
      name: 'component 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
      problems: { warnings: [], errors: ['error'] }
    },
    {
      id: 4,
      equipmentId: 4,
      name: 'component 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
      problems: { warnings: ['warning'], errors: ['error'] }
    }
    ,
    {
      id: 5,
      equipmentId: 4,
      name: 'component 5',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vel?',
      problems: { warnings: [], errors: [] }
    }
  ]

  constructor() { }

  /**
   * Gets equipment list for concrete vehicle
   * @param id vehicle id
   * @returns EquipmentList[]
   */
  getEquipmentList(id: number): EquipmentList[] {
    // some server connect code

    // end of server connect code

    return this.mockEquipmentList.filter(value => {
      return value.vehicleId === id;
    })
  }

  getEquipmentItems(id: number): EquipmentItem[] {

    // some server connect code

    // end of server connect code

    return this.mockEquipmentItems.filter(value => {
      return value.equipmentId === id;
    })
  }
}
