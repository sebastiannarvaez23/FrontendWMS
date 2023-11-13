import { Component, Renderer2, ElementRef, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-primary',
  templateUrl: './table-primary.component.html',
  styleUrls: ['./table-primary.component.css'],
})
export class TablePrimaryComponent implements AfterViewInit, OnChanges {
  @Input() headers: string[] = [];

  rows = [
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    },
    {
      'data1': "dato n",
      'data2': "dato n",
      'data3': "dato n",
      'data4': "dato n"
    }
  ]

  constructor(private renderer: Renderer2, private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['headers']) {
      this.applyStyles();
    }
  }

  ngAfterViewInit() {
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

    /* Body Table */
    const rowTables = this.el.nativeElement.querySelectorAll('.row-table');
    if (rowTables) {
      const numElementsInRow = Object.keys(this.rows[0]).length;
      rowTables.forEach((rowTable: Element, index: number) => {
        const gridTemplateColumnsDataInRow = `repeat(${numElementsInRow}, ${100 / numElementsInRow}%)`;
        this.renderer.setStyle(rowTable, 'grid-template-columns', gridTemplateColumnsDataInRow);
      });
    }
  }
}
