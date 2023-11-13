import { Injectable } from '@angular/core';
import { Picking } from '../interfaces/picking.interface';

@Injectable({
    providedIn: 'root',
})
export class PickingService {
    public pickings: Picking[] = [{
        id: 1,
        shipped: new Date('10/02/2023'),
        responsible: 'Sebastian Narvaez',
        created: new Date('01/02/2023')
    }];

    addPicking(picking: Picking): void {
        this.pickings.push(picking);
    }

    deletePicking(id: number): void {
        this.pickings = this.pickings.filter(
            picking => picking.id !== id
        );
    }
}