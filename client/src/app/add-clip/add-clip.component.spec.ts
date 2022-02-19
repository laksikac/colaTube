import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClipComponent } from './add-clip.component';

describe('AddClipComponent', () => {
  let component: AddClipComponent;
  let fixture: ComponentFixture<AddClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
