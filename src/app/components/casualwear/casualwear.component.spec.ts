import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualwearComponent } from './casualwear.component';

describe('CasualwearComponent', () => {
  let component: CasualwearComponent;
  let fixture: ComponentFixture<CasualwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasualwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
