import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentItem } from 'src/app/shared/interfaces/equipment-item';
import { EquipmentService } from '../shared/equipment.service';

@Component({
  selector: 'equipment-items',
  templateUrl: './equipment-items.component.html',
  styleUrls: ['./equipment-items.component.scss']
})
export class EquipmentItemsComponent implements OnInit {

  private readonly OK_PRIORITY: number = 0;
  private readonly WARNING_PRIORITY: number = 1;
  private readonly ERROR_PRIORITY: number = 2;

  @Input('equipment-id')
  equipmentId!: number;

  @Output()
  eventEmitter: EventEmitter<number>;

  private equipmentService: EquipmentService;

  equipmentItems!: EquipmentItem[];
  equipmentStatuses: Array<number>;

  priority!: number;

  constructor(equipmentService: EquipmentService) {
    this.equipmentService = equipmentService;
    this.eventEmitter = new EventEmitter<number>();

    this.equipmentStatuses = [];
  }
  
  ngOnInit(): void {
    this.equipmentItems = this.equipmentService.getEquipmentItems(this.equipmentId);
    this.equipmentItems.forEach(value => {
      let status = this.OK_PRIORITY;
      if (value.problems.errors.length !== 0) {
        status = this.ERROR_PRIORITY;
      } else if (value.problems.warnings.length !== 0) {
        status = this.WARNING_PRIORITY;
      }
      this.equipmentStatuses.push(status)
    });

    this.eventEmitter.emit(this.getStatus());
  }

  getStatus(): number {
    return Math.max.apply(null, this.equipmentStatuses);
  }
}
