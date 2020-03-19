import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioNuevoPage } from './registro-usuario-nuevo.page';

describe('RegistroUsuarioNuevoPage', () => {
  let component: RegistroUsuarioNuevoPage;
  let fixture: ComponentFixture<RegistroUsuarioNuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsuarioNuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUsuarioNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
