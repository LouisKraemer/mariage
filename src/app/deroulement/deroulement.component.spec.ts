import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeroulementComponent } from './deroulement.component';

describe('DeroulementComponent', () => {
  let component: DeroulementComponent;
  let fixture: ComponentFixture<DeroulementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeroulementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeroulementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
