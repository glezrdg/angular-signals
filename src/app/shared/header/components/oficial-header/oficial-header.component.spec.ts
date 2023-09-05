import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficialHeaderComponent } from './oficial-header.component';

describe('OficialHeaderComponent', () => {
  let component: OficialHeaderComponent;
  let fixture: ComponentFixture<OficialHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OficialHeaderComponent]
    });
    fixture = TestBed.createComponent(OficialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
