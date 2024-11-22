import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedListComponent } from '../../common/shared-list/shared-list.component';
import { HotelBranches } from '../model/hotel-branches';
import { HotelBranchesService } from '../service/hotel-branches.service';

@Component({
  selector: 'app-hotel-branches-list',
  standalone: true,
  imports: [SharedListComponent],
  templateUrl: './hotel-branches-list.component.html',
  styleUrls: ['./hotel-branches-list.component.css']
})
export class HotelBranchesListComponent implements OnInit {

  title: string = "Branches";
  // response: HotelBranches[] = [];
  tableHeaders: { isHyperlink: boolean; key: string; header: string }[] = [];
  response!: HotelBranches[]

  constructor(private branchService: HotelBranchesService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.title = "Branches";
    this.tableHeaders = this.branchService.tableHeaders;
    this.getHotelBranches();
  }

  onRowSelect(row: any) {
    console.log('Selected row:', row);
  }

  getHotelBranches() {
    this.branchService.getHotelBranches().subscribe((data: HotelBranches[]) => {
      this.response = data;
      this.cdr.detectChanges();
    });
  }

  actions = [
    { label: 'Edit', icon: 'edit', value: 'edit' },
    { label: 'Delete', icon: 'delete', value: 'delete' }
  ];

  onActionSelected(action: string) {
    switch (action) {
      case 'edit':
        this.editItem();
        break;
      case 'delete':
        this.deleteItem();
        break;
      default:
        break;
    }
  }

  editItem() {
    console.log('Edit action triggered');
    // Implement edit logic here
  }

  deleteItem() {
    console.log('Delete action triggered');
    // Implement delete logic here
  }

}
