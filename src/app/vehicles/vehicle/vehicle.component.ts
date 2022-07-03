import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent {

  @Input('vehicle-id')
  id!: number;

  @Output()
  eventEmitter: EventEmitter<number>;

  status!: number;

  constructor() {
    this.eventEmitter = new EventEmitter<number>();
  }

  setStatus(status: number) {
    this.status = status;
    this.eventEmitter.emit(this.status);
  }
}
