import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreatePanelComponent } from './dialog-create-panel.component';

describe('DialogCreatePanelComponent', () => {
  let component: DialogCreatePanelComponent;
  let fixture: ComponentFixture<DialogCreatePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreatePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
