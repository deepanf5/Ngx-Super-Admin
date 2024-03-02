import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewsComponent } from './list-views.component';

describe('ListViewsComponent', () => {
  let component: ListViewsComponent;
  let fixture: ComponentFixture<ListViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewsComponent]
    });
    fixture = TestBed.createComponent(ListViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
