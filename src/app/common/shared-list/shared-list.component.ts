import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';

interface Action {
  label: string;
  value: string;  // A unique identifier for each action
}

@Component({
  selector: 'app-shared-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SharedListComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() componentName: string = 'Component Name';
  @Input() tableHeaders: { isHyperlink: boolean; key: string; header: string; }[] = [];
  @Input() response: any[] = [];
  @Input() showSearch: boolean = true;
  @Input() showAddButton: boolean = true;
  @Input() showActionButton: boolean = true;
  @Input() actions: Action[] = [];

  @Output() actionSelected = new EventEmitter<string>();

  displayedColumns: string[] = [];
  tableDataSource = new MatTableDataSource<any>();
  dialog: any;
  searchControl: any;

  ngOnInit() {
    this.displayedColumns = [
      'select',
      ...this.tableHeaders.map((column) => column.key),
    ];
    this.tableDataSource.data = this.response;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['response']) {
      this.tableDataSource.data = this.response;
    }
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  onRowSelect(row: any) {
    console.log('Selected Row:', row);
  }

  selection = new SelectionModel<any>(true, []);

  onSelectRow(row: any, event: any) {
    this.selection.toggle(row);
  }

  onSelectAllRows(event: any) {
    if (event.checked) {
      this.selection.select(...this.tableDataSource.data);
    } else {
      this.selection.clear();
    }
  }

  isSelected(row: any): boolean {
    return this.selection.isSelected(row);
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  isIndeterminate(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected !== 0 && numSelected !== numRows;
  }

  onLinkClick(arg0: any) {
    throw new Error('Method not implemented.');
  }

  onActionClick(actionValue: string) {
    this.actionSelected.emit(actionValue);
  }

}
