import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title form input', () => {
    expect(false).toBe(true);
  });
  it('should display description form input', () => {
    expect(false).toBe(true);
  });
  it('should display price form input', () => {
    expect(false).toBe(true);
  });

  it('should emit action', () => {
    expect(false).toBe(true);
  });
});
