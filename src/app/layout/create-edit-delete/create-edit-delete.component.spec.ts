import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditDeleteComponent } from './create-edit-delete.component';

describe('CreateEditDeleteComponent', () => {
  let component: CreateEditDeleteComponent;
  let fixture: ComponentFixture<CreateEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
