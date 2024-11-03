import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBranchesEditComponent } from './hotel-branches-edit.component';

describe('HotelBranchesEditComponent', () => {
  let component: HotelBranchesEditComponent;
  let fixture: ComponentFixture<HotelBranchesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBranchesEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBranchesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
