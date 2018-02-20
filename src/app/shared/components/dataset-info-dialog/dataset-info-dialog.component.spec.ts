import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetInfoDialogComponent } from './dataset-info-dialog.component';

describe('DatasetInfoDialogComponent', () => {
  let component: DatasetInfoDialogComponent;
  let fixture: ComponentFixture<DatasetInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
