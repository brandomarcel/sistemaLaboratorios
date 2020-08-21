import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocenteNuevoPage } from './docente-nuevo.page';

describe('DocenteNuevoPage', () => {
  let component: DocenteNuevoPage;
  let fixture: ComponentFixture<DocenteNuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteNuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocenteNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
