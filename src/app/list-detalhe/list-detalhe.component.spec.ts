import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetalheComponent } from './list-detalhe.component';

describe('ListDetalheComponent', () => {
  let component: ListDetalheComponent;
  let fixture: ComponentFixture<ListDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
