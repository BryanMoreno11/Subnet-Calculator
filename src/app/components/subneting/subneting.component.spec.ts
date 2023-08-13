import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetingComponent } from './subneting.component';

describe('SubnetingComponent', () => {
  let component: SubnetingComponent;
  let fixture: ComponentFixture<SubnetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubnetingComponent]
    });
    fixture = TestBed.createComponent(SubnetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
