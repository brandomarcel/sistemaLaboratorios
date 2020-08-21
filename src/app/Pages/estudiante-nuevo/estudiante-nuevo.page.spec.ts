import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudianteNuevoPage } from './estudiante-nuevo.page';

describe('EstudianteNuevoPage', () => {
  let component: EstudianteNuevoPage;
  let fixture: ComponentFixture<EstudianteNuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteNuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudianteNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
