import { Injectable } from '@angular/core';
import { Filters } from 'src/app/shared/interfaces/filters';
import { Vehicles } from 'src/app/shared/interfaces/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehiclesList(): Vehicles[] {
    // some server connect code

    // end of server connect code

    return [{
      id: 1,
      name: 'Autobus nr 123',
      type: {
        name: 'type 1',
        id: 1
      }
    },
    {
      id: 2,
      name: 'Autobus nr 321',
      type: {
        name: 'type 2',
        id: 2
      }
    },
    {
      id: 3,
      name: 'Autobus nr 323',
      type: {
        name: 'type 2',
        id: 2
      }
    }]
  }

  setFilteringOptions(vehiclesData: Vehicles[]): Filters[] {
    let ids: Array<number> = [];
    let filters: Filters[] = [];

    vehiclesData.forEach(val => {
      if (!ids.includes(val.type.id)) {
        filters.push({ value: val.type.id, textValue: val.type.name });
        ids.push(val.type.id);
      }
    });
    return filters;
  }

}
