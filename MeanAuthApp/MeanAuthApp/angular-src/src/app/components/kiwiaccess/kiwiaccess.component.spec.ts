import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiwiaccessComponent } from './kiwiaccess.component';

describe('KiwiaccessComponent', () => {
  let component: KiwiaccessComponent;
  let fixture: ComponentFixture<KiwiaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiwiaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiwiaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
