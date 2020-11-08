import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardPostComponent } from './add-board-post.component';

describe('AddBoardPostComponent', () => {
  let component: AddBoardPostComponent;
  let fixture: ComponentFixture<AddBoardPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBoardPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
