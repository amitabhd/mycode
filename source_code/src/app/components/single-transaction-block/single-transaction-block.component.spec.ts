import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTransactionBlockComponent } from './single-transaction-block.component';

describe('SingleTransactionBlockComponent', () => {
  let component: SingleTransactionBlockComponent;
  let fixture: ComponentFixture<SingleTransactionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTransactionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTransactionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
