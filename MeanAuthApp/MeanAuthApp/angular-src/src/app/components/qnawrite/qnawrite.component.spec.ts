import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnawriteComponent } from './qnawrite.component';

describe('QnawriteComponent', () => {
  let component: QnawriteComponent;
  let fixture: ComponentFixture<QnawriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnawriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnawriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
