import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoRutasPage } from './info-rutas.page';

describe('InfoRutasPage', () => {
  let component: InfoRutasPage;
  let fixture: ComponentFixture<InfoRutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoRutasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoRutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
