import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbolesPage } from './arboles.page';

describe('ArbolesPage', () => {
  let component: ArbolesPage;
  let fixture: ComponentFixture<ArbolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
