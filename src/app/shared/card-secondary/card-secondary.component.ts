import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-secondary',
  templateUrl: './card-secondary.component.html',
  styleUrls: ['./card-secondary.component.css']
})
export class CardSecondaryComponent {
  @Input() width: string = "auto";
  @Input() height: string = "auto";
  @Input() margin: string = "auto";


  getContainerClassSecondary() {
    return `card-secondary ${this.width} ${this.height} ${this.margin}`;
  }
}
