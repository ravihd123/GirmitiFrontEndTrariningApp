import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlreadyLogginComponent } from './user-already-loggin.component';

describe('UserAlreadyLogginComponent', () => {
  let component: UserAlreadyLogginComponent;
  let fixture: ComponentFixture<UserAlreadyLogginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlreadyLogginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlreadyLogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
