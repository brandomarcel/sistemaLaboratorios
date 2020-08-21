import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriaNuevoPage } from './materia-nuevo.page';

describe('MateriaNuevoPage', () => {
  let component: MateriaNuevoPage;
  let fixture: ComponentFixture<MateriaNuevoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaNuevoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaNuevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
