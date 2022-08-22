import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApadrinharComponent } from './apadrinhar.component';

describe('ApadrinharComponent', () => {
  let component: ApadrinharComponent;
  let fixture: ComponentFixture<ApadrinharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApadrinharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
