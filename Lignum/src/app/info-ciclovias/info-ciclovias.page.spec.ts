import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoCicloviasPage } from './info-ciclovias.page';

describe('InfoCicloviasPage', () => {
  let component: InfoCicloviasPage;
  let fixture: ComponentFixture<InfoCicloviasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCicloviasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCicloviasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
