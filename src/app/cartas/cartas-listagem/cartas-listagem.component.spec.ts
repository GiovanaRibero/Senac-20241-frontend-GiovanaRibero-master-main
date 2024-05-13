import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasListagemComponent } from './cartas-listagem.component';

describe('CartasListagemComponent', () => {
  let component: CartasListagemComponent;
  let fixture: ComponentFixture<CartasListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartasListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
