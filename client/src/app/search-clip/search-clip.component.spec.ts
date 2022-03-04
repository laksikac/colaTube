import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClipComponent } from './search-clip.component';

describe('SearchClipComponent', () => {
  let component: SearchClipComponent;
  let fixture: ComponentFixture<SearchClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
