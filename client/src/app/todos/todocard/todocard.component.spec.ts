import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocardComponent } from './todocard.component';

describe('TodocardComponent', () => {
  let component: TodocardComponent;
  let fixture: ComponentFixture<TodocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
