import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TougleComponent } from './tougle.component';

describe('TougleComponent', () => {
  let component: TougleComponent;
  let fixture: ComponentFixture<TougleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TougleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TougleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
