import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantFormComponent } from './consultant-form.component';

describe('ConsultantFormComponent', () => {
  let component: ConsultantFormComponent;
  let fixture: ComponentFixture<ConsultantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
