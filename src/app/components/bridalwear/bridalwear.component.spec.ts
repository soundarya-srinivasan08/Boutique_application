import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalwearComponent } from './bridalwear.component';

describe('BridalwearComponent', () => {
  let component: BridalwearComponent;
  let fixture: ComponentFixture<BridalwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridalwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridalwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
