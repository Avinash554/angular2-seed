import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortinglistComponent } from './sortinglist.component';

describe('SortinglistComponent', () => {
  let component: SortinglistComponent;
  let fixture: ComponentFixture<SortinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
