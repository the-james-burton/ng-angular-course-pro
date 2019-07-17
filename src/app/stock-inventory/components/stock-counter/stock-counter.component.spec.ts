import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StockCounterComponent } from './stock-counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// different from course, the TestBed is initialised in test.js

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;
  let el: DebugElement;

  // different from course - needs to be wrapped in async()...
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.value = 0;
  }));

  it('should increment when the + button is clicked', () => {
    el.query(By.css('button:first-child')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.value).toBe(1);
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('1');
  });

  it('should increment the value when the up arrow is pressed', () => {
    const event = new Event('KeyboardEvent') as any;
    event.code = 'ArrowUp';
    el.query(By.css('.stock-counter > div > div')).triggerEventHandler('keydown', event);
    fixture.detectChanges();
    expect(component.value).toBe(1);
  });

  it('should increment correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not decrement below the default minimum value', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment above the default maximum value', () => {
    for (let i = 0; i < 200; i++) {
      component.increment();
    }
    expect(component.value).toBe(100);
  });

  it('should not increment above the given maximum', () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(20);
  });

  it('should call the output on a value change', () => {
    spyOn(component.changed, 'emit').and.callThrough();
    component.step = 100;
    component.increment();
    expect(component.changed.emit).toHaveBeenCalledWith(100);
  });

});
