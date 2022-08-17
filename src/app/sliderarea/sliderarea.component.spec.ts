import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderareaComponent } from './sliderarea.component';

describe('SliderareaComponent', () => {
  let component: SliderareaComponent;
  let fixture: ComponentFixture<SliderareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
