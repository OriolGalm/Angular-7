import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressupostComponent } from './pressupost.component';

describe('PressupostComponent', () => {
  let component: PressupostComponent;
  let fixture: ComponentFixture<PressupostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressupostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressupostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
