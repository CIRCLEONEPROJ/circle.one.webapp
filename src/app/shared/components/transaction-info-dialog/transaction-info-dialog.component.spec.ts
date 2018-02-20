import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionInfoDialogComponent } from './transaction-info-dialog.component';

describe('TransactionInfoDialogComponent', () => {
  let component: TransactionInfoDialogComponent;
  let fixture: ComponentFixture<TransactionInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
