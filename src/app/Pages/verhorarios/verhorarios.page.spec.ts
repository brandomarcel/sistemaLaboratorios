import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerhorariosPage } from './verhorarios.page';

describe('VerhorariosPage', () => {
  let component: VerhorariosPage;
  let fixture: ComponentFixture<VerhorariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerhorariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerhorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
