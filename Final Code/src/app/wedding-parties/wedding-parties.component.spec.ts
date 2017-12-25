import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartiesComponent } from './wedding-parties.component';

describe('WeddingPartiesComponent', () => {
  let component: WeddingPartiesComponent;
  let fixture: ComponentFixture<WeddingPartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
