import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatePage } from './authenticate.page';

describe('AuthenticatePage', () => {
  let component: AuthenticatePage;
  let fixture: ComponentFixture<AuthenticatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
