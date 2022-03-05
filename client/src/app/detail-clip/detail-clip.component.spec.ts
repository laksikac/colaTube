import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClipComponent } from './detail-clip.component';

describe('DetailClipComponent', () => {
  let component: DetailClipComponent;
  let fixture: ComponentFixture<DetailClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
