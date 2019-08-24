import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPostComponent } from './auth-post.component';

describe('AuthPostComponent', () => {
  let component: AuthPostComponent;
  let fixture: ComponentFixture<AuthPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
