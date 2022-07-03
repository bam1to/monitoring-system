import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { EquipmentList } from 'src/app/shared/interfaces/equipment-list';
import { StylesService } from 'src/app/shared/services/styles.service';
import { EquipmentService } from '../shared/equipment.service';

@Component({
  selector: 'equipments-list',
  templateUrl: './equipments-list.component.html',
  styleUrls: ['./equipments-list.component.scss']
})
export class EquipmentsListComponent implements OnInit {

  @Input('vehicle-id')
  vehicleId!: number;

  @Output()
  eventEmitter: EventEmitter<number>;

  equipmentList!: EquipmentList[];
  status!: number;
  borderColor!: string;

  private equipmentService: EquipmentService;
  private stylesService: StylesService;

  constructor(
    equipmentService: EquipmentService,
    stylesService: StylesService
  ) {
    this.equipmentService = equipmentService;
    this.stylesService = stylesService;
    this.eventEmitter = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.equipmentList = this.equipmentService.getEquipmentList(this.vehicleId);
  }

  setStatus(status: number, index: number): void {
    this.status = status;
    this.equipmentList[index].status = status;
    this.eventEmitter.emit(this.status);
  }
}

