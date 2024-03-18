import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StacjaComponent } from './stacja.component';

describe('StacjaComponent', () => {
  let component: StacjaComponent;
  let fixture: ComponentFixture<StacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StacjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
