import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-shared-list',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatTableModule ],
  templateUrl: './shared-list.component.html',
  styleUrl: './shared-list.component.css'
})
export class SharedListComponent implements OnInit {
  @Input() entityName: string = 'Entity';
  @Input() columns: { key: string; header: string }[] = [];
  @Input() dataSource: any[] = [];

  displayedColumns: string[] = [];
  tableDataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.displayedColumns = this.columns.map(column => column.key);
    this.tableDataSource.data = this.dataSource;
  }

  onRowSelect(row: any) {
    console.log('Selected Row:', row);
  }

}
