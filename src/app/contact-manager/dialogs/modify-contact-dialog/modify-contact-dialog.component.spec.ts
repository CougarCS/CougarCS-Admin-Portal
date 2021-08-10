import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContactDialogComponent } from './modify-contact-dialog.component';

describe('ModifyContactDialogComponent', () => {
  let component: ModifyContactDialogComponent;
  let fixture: ComponentFixture<ModifyContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyContactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
