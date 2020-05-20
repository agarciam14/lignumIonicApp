import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearMetaPage } from './crear-meta.page';

describe('CrearMetaPage', () => {
  let component: CrearMetaPage;
  let fixture: ComponentFixture<CrearMetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearMetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
