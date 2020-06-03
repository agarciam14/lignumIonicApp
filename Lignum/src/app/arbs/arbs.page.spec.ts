import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbsPage } from './arbs.page';

describe('ArbsPage', () => {
  let component: ArbsPage;
  let fixture: ComponentFixture<ArbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
