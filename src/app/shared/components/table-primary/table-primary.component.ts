import { Component, Renderer2, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-primary',
  templateUrl: './table-primary.component.html',
  styleUrls: ['./table-primary.component.css'],
})
export class TablePrimaryComponent<T extends Record<string, any>> implements AfterViewInit, OnChanges {
  @Input() headers: string[] = [];
  @Input() rows: T[] = [];
  numElementsInRow: number = 0;
  sizeElementsInRow: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  getGridTemplateColumnsStyle(): string {
    return `repeat(${this.numElementsInRow}, ${this.sizeElementsInRow}%)`;
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['headers']) {
      this.applyStyles();
    }
  }

  ngAfterViewInit() {
    this.numElementsInRow = Object.keys(this.rows[0]).length;
    this.sizeElementsInRow = 100 / this.numElementsInRow;
    this.applyStyles();
  }

  applyStyles() {
    if (!this.el.nativeElement) {
      console.error('Element not found');
      return;
    }

    /* Headers Table */
    const headersTable = this.el.nativeElement.querySelector('.headers-table');
    if (headersTable && this.headers) {
      const numHeaders = this.headers.length;
      const gridTemplateColumnsHeader = `repeat(${numHeaders}, ${100 / numHeaders}%)`;
      this.renderer.setStyle(headersTable, 'grid-template-columns', gridTemplateColumnsHeader);
    }
  }
}
