import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocontrolsComponent } from './todocontrols.component';

describe('TodocontrolsComponent', () => {
  let component: TodocontrolsComponent;
  let fixture: ComponentFixture<TodocontrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocontrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
