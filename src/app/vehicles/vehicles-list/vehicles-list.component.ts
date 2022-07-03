import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { Filters } from 'src/app/shared/interfaces/filters';
import { Vehicles } from 'src/app/shared/interfaces/vehicles';
import { StylesService } from 'src/app/shared/services/styles.service';
import { VehicleService } from '../shared/vehicle.service';

@Component({
  selector: 'vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VehiclesListComponent {

  columnsToDisplayWithExpand: Array<Array<string[]> | string>
  expandedElement!: Vehicles | null;
  columnsToDisplay: Array<string>;
  stylesService: StylesService;
  filteringOptions: Filters[];
  vehiclesData: Vehicles[];
  dataSource: MatTableDataSource<Vehicles>;
  cd: ChangeDetectorRef;
  status!: number;

  private vehicleService: VehicleService;

  constructor(
    vehicleService: VehicleService,
    stylesService: StylesService,
    cd: ChangeDetectorRef
  ) {
    this.vehicleService = vehicleService;
    this.stylesService = stylesService;
    this.cd = cd;

    this.columnsToDisplay = ['name', 'type', 'status'];
    this.vehiclesData = this.vehicleService.getVehiclesList();
    this.dataSource = new MatTableDataSource(this.vehiclesData);
    this.filteringOptions = this.vehicleService.setFilteringOptions(this.vehiclesData);
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  }

  setStatus(status: number, id: number): void {
    this.vehiclesData.map(value => {
      if (value.id === id) {
        value.status = status;
      }
      return value;
    })

    this.cd.detectChanges();
    this.status = status;
  }

  filteringBy($event: MatSelectChange) {
    let value = $event.value;
    let dataTable = this.vehiclesData;
    if (value !== '0') {
      dataTable = dataTable.filter((item) => {
        return (value === '') ? item.type.id !== value : item.type.id === value
      })
    }
    this.dataSource.data = dataTable;
  }

}
