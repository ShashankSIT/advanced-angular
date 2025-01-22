import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizationComponent } from './dom-sanitization.component';

describe('DomSanitizationComponent', () => {
  let component: DomSanitizationComponent;
  let fixture: ComponentFixture<DomSanitizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomSanitizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomSanitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
