import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalPartiesComponent } from './formal-parties.component';

describe('FormalPartiesComponent', () => {
  let component: FormalPartiesComponent;
  let fixture: ComponentFixture<FormalPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
