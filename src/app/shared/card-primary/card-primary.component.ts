import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-primary',
  templateUrl: './card-primary.component.html',
  styleUrls: ['./card-primary.component.css']
})
export class CardPrimaryComponent {
  @Input() width: string = "auto";
  @Input() height: string = "auto";

  getContainerClass() {
    return `card-primary ${this.width} ${this.height}`;
  }
}
