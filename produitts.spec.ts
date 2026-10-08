import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Produitts } from './produitts';

describe('Produitts', () => {
  let component: Produitts;
  let fixture: ComponentFixture<Produitts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Produitts],
    }).compileComponents();

    fixture = TestBed.createComponent(Produitts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
