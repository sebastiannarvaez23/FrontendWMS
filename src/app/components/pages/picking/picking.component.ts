import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.css'],
})
export class PickingComponent {
  @Input() noSaleOrder: string = '';

  single = [
    {
      name: 'Despachado',
      value: 8940000,
    },
    {
      name: 'Por despachar',
      value: 5000000,
    },
  ];

  view: [number, number] = [450, 200];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  colorScheme: any = {
    domain: ['#313131', '#AAAAAA'],
  };

  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
