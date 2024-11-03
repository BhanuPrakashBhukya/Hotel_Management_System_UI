import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBranchesCreateComponent } from './hotel-branches-create.component';

describe('HotelBranchesCreateComponent', () => {
  let component: HotelBranchesCreateComponent;
  let fixture: ComponentFixture<HotelBranchesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBranchesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBranchesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
