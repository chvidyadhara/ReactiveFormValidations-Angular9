import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregiserformComponent } from './userregiserform.component';

describe('UserregiserformComponent', () => {
  let component: UserregiserformComponent;
  let fixture: ComponentFixture<UserregiserformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregiserformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregiserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
