import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saleorder-info',
  templateUrl: './saleorder-info.component.html',
  styleUrls: ['./saleorder-info.component.css']
})
export class SaleorderInfoComponent {
  @Input() noSaleOrder: string = '';
}
