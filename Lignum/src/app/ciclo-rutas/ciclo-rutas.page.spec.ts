import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CicloRutasPage } from './ciclo-rutas.page';

describe('CicloRutasPage', () => {
  let component: CicloRutasPage;
  let fixture: ComponentFixture<CicloRutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloRutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CicloRutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
