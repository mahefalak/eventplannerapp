import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayPartiesComponent } from './birthday-parties.component';

describe('BirthdayPartiesComponent', () => {
  let component: BirthdayPartiesComponent;
  let fixture: ComponentFixture<BirthdayPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
