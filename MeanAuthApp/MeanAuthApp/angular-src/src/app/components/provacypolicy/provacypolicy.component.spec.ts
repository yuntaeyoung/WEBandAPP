import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvacypolicyComponent } from './provacypolicy.component';

describe('ProvacypolicyComponent', () => {
  let component: ProvacypolicyComponent;
  let fixture: ComponentFixture<ProvacypolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvacypolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvacypolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
