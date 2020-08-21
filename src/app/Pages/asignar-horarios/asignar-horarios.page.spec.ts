import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignarHorariosPage } from './asignar-horarios.page';

describe('AsignarHorariosPage', () => {
  let component: AsignarHorariosPage;
  let fixture: ComponentFixture<AsignarHorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarHorariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignarHorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
