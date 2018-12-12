import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlocationsComponent } from './adminlocations.component';

describe('AdminlocationsComponent', () => {
  let component: AdminlocationsComponent;
  let fixture: ComponentFixture<AdminlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
