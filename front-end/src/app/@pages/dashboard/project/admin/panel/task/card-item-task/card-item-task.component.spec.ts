import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemTaskComponent } from './card-item-task.component';

describe('CardItemTaskComponent', () => {
  let component: CardItemTaskComponent;
  let fixture: ComponentFixture<CardItemTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardItemTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
