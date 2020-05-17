import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearCicloviaPage } from './crear-ciclovia.page';

describe('CrearCicloviaPage', () => {
  let component: CrearCicloviaPage;
  let fixture: ComponentFixture<CrearCicloviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCicloviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearCicloviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
