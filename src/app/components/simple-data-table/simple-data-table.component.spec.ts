import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataTableComponent } from './simple-data-table.component';

describe('SimpleDataTableComponent', () => {
  let component: SimpleDataTableComponent;
  let fixture: ComponentFixture<SimpleDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
