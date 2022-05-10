import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThgenComponent } from './thgen.component';

describe('ThgenComponent', () => {
  let component: ThgenComponent;
  let fixture: ComponentFixture<ThgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
