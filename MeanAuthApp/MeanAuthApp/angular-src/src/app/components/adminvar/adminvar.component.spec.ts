import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvarComponent } from './adminvar.component';

describe('AdminvarComponent', () => {
  let component: AdminvarComponent;
  let fixture: ComponentFixture<AdminvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
