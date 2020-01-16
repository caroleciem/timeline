import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAjoutComponent } from './card-ajout.component';

describe('CardAjoutComponent', () => {
  let component: CardAjoutComponent;
  let fixture: ComponentFixture<CardAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
