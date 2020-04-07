import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WandComponent } from './wand.component';

describe('WandComponent', () => {
  let component: WandComponent;
  let fixture: ComponentFixture<WandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
