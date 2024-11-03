import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBranchesListComponent } from './hotel-branches-list.component';

describe('HotelBranchesListComponent', () => {
  let component: HotelBranchesListComponent;
  let fixture: ComponentFixture<HotelBranchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBranchesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBranchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
