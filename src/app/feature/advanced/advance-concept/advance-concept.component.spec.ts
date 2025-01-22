import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceConceptComponent } from './advance-concept.component';

describe('AdvanceConceptComponent', () => {
  let component: AdvanceConceptComponent;
  let fixture: ComponentFixture<AdvanceConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
