import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantManagementComponent } from './consultant-management.component';

describe('ConsultantManagementComponent', () => {
  let component: ConsultantManagementComponent;
  let fixture: ComponentFixture<ConsultantManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
