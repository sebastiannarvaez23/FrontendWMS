import { Component } from '@angular/core';
import { PickingService } from '../../services/picking.service';
import { Picking } from '../../interfaces/picking.interface';

@Component({
  selector: 'app-picking-list',
  templateUrl: './picking-list.component.html',
  styleUrls: ['./picking-list.component.css']
})
export class PickingListComponent {

  constructor(
    private pickingService: PickingService
  ) { }

  get pickings(): Picking[] {
    return this.pickingService.pickings.map(picking => {
      if (typeof picking.shipped !== 'string') picking.shipped = this.formatDate(picking.shipped);
      if (typeof picking.created !== 'string') picking.created = this.formatDate(picking.created);
      return picking;
    });
  }

  onAddPicking(): void {
    const currentDate = new Date();
    this.pickingService.addPicking({
      id: this.getNewId(),
      shipped: currentDate,
      responsible: "Sebastian Narvaez",
      created: currentDate,
    });
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private getNewId(): number {
    if (this.pickingService.pickings.length === 0) return 0;

    const lastId = this.pickingService.pickings.reduce((maxId, picking) => {
      return Math.max(maxId, picking.id);
    }, 0);

    return lastId + 1;
  }
}
