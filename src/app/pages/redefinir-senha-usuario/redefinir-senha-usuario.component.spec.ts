import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinirSenhaUsuarioComponent } from './redefinir-senha-usuario.component';

describe('RedefinirSenhaUsuarioComponent', () => {
  let component: RedefinirSenhaUsuarioComponent;
  let fixture: ComponentFixture<RedefinirSenhaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedefinirSenhaUsuarioComponent]
    });
    fixture = TestBed.createComponent(RedefinirSenhaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
